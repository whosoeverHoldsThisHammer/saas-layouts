import m from "mithril";

const Settings = {
	view: function(vnode) {
		return m("div", { class: "flex flex-row text-surface"}, [
            m("div", { class: "px-6 pb-4 w-72 space-y-2 text-sm"}, [
                m("div", { class: "rounded-md p-2 bg-container font-medium"},  "Appearance"),
                m("div", { class: "rounded-md p-2 font-medium"}, "Notifications"),
                m("div", { class: "rounded-md p-2 font-medium"}, "Profile"),
                m("div", { class: "rounded-md p-2 font-medium"}, "Team"),
                m("div", { class: "rounded-md p-2 font-medium"}, "Billing")
            ]),
            m("div", [
                m("div", { class: "text-lg font-medium"}, "Appearance"),
                m("div", { class: "text-sm font-medium"}, "Theme"),
                m("div", { class: "flex flex-row items-center space-x-4"}, [
                    m("div", [
                        m("div", "Light")
                    ]),
                    m("div", [
                        m("div", "Dark")
                    ]),
                    m("div", [
                        m("div", "Lime")
                    ])
                ])
            ])
        ])
	}
}


m.mount(document.getElementById("app"), Settings);