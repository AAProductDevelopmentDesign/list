const editor = new EditorJS({
    holder: "editorjs",
    tools: {
        list: {
            class: List,
            inlineToolbar: true,
        },
        lo: {
            class: CustomListLo,
            inlineToolbar: true,
        },
        sp: {
            class: CustomListSp,
            inlineToolbar: true,
        },
        tp: {
            class: CustomListTp,
            inlineToolbar: true,
        }
    },
    onChange: async (e) => { await e.saver.save()},
    data: {
        "time": 1602919875295,
        "blocks": [
            {
                "type": "paragraph",
                "data": {
                    "text": "Paste an image here to test"
                }
            }
        ],
        "version": "2.19.0"
    }
});