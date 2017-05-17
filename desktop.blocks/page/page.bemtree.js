block('page')(
    def().match(function() { return !this._pageInited; })(function () {
        this._pageInited = true;
        return applyCtx({
            block: this.block,
            title: this.data.title || 'Protect',
            styles: [
                { elem: 'css', url: this.data.settings.baseUrl + 'index.min.css' }
            ],
            scripts: [
                { elem: 'js', url: this.data.settings.baseUrl + 'index.min.js' }
            ],
            content: [
                { block: 'header' },
                { block: 'main' },
                { block: 'footer' }
            ]
        });
    })
);
