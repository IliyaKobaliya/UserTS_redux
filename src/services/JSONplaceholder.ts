import config from '../config.json'


type URL = string;

export class JSONplaceholder {

    _apiBase = config.JSONplaceholder;

    async getResource(url: URL) {
        
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getUsers() {
        return await this.getResource(`/users`);
    }
} 