import Papa from "papaparse"

type Link = {
    label: string,
    url: string,
    icon:string
}

type User = {
    slug: string,
    url: string
}

const api = {
    user: {
        list: async () => {
            const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSyZZZyS-Mjwq9BmPhCJXd4IX_K4zSviG0qWIKT8KxHM--8qIaJNpUhubJ1X-hoTbM00HPVTAslHnsF/pub?gid=1460472084&output=csv")
            const data = await res.text();

            const parsed = await new Promise<User[]>((resolve, reject) => {
                Papa.parse<User>(data,
                    {
                        header: true,
                        complete: (result) => resolve(result.data),
                        error: reject
                    });
            });

            return parsed;
        }
    },
    links: {
        fetch: async (url:string) => {
            const res = await fetch(url)
            const data = await res.text();

            const parsed = await new Promise<Link[]>((resolve, reject) => {
                Papa.parse<Link>(data,
                    {
                        header: true,
                        complete: (result) => resolve(result.data),
                        error: reject
                    });
            });

            return parsed;
        }
    }
}

export default api;