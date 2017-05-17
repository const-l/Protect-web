block('management')(
    content()(function () {
        return [
            {
                block: 'link',
                mods: { theme: 'islands', size: 'l', type: 'management' },
                url: this.data.settings.baseUrl + "clients",
                content: 'Клиенты'
            },
            {
                block: 'link',
                mods: { theme: 'islands', size: 'l', type: 'management' },
                url: this.data.settings.baseUrl + "visits",
                content: 'Визиты'
            },
            {
                block: 'link',
                mods: { theme: 'islands', size: 'l', type: 'management' },
                url: this.data.settings.baseUrl + "lookups",
                content: 'Справочники'
            }
        ];
    })
);
