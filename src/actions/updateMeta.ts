type PropertiesMetaTag = string;

type NamesMetaTag = string;

export interface PageMeta {
    title: string;
    description: string;
    keywords: string;
    properties?: {
        property: PropertiesMetaTag;
        content: string;
    }[];
    names?: {
        name: NamesMetaTag;
        content: string;
    }[];
}

const updateMeta = (meta: PageMeta) => {
    const head = document.querySelector("head");

    Object.entries(meta).map(([key, value]) => {
        switch (key) {
            case "title":
                const title = document.querySelector("title");

                if (title) {
                    title.remove();
                }

                const newTitle = document.createElement("title");
                newTitle.innerText = value;

                head.append(newTitle);
        }
    });
};
