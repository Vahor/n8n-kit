export class Redact {
	private redactKeys: (RegExp | string)[];
	private replacer: () => string;

	constructor(redactKeys: (RegExp | string)[], replacer: () => string) {
		this.redactKeys = redactKeys;
		this.replacer = replacer;
	}

	private shouldRedact(key: string) {
		return this.redactKeys.some((re) => {
			if (typeof re === "string") {
				return re === key;
			} else {
				return re.test(key);
			}
		});
	}

	public redact(obj: any) {
		this._redact(obj);
	}
	private isObject(obj: any) {
		return typeof obj === "object" && obj !== null;
	}

	private _redact(obj: any, currentPath = "") {
		if (Array.isArray(obj)) {
			obj.forEach((item, index) => {
				const newPath = currentPath ? `${currentPath}[${index}]` : `[${index}]`;
				this._redact(item, newPath);
			});
		} else if (this.isObject(obj)) {
			for (const [key, value] of Object.entries(obj)) {
				const newPath = currentPath ? `${currentPath}.${key}` : key;
				if (this.shouldRedact(newPath)) {
					obj[key] = this.replacer();
				} else {
					this._redact(value, newPath);
				}
			}
		}
	}
}
