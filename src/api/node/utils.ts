import { IFetchWrapper } from "../../utils/request";

export default class Utils {

    constructor(fetchInstance: IFetchWrapper<any>) {
        this.fetch = fetchInstance;
    }

    private readonly fetch: IFetchWrapper<any>;

    time() {
        return this.fetch('/utils/time').then((t) => t.system);
    }

    script = {

        compile(code: string): Promise<string> {
            return this.fetch('/utils/script/compile', {
                method: 'POST',
                body: code
            }).then((response) => {
                return response.script;
            });
        }

    }

};
