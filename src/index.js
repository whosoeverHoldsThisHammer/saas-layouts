import m from "mithril";

const Settings = {
	view: function(vnode) {
		return m("div", { class: "flex flex-row text-surface"}, [
            m("div", { class: "px-6 pb-4 w-80 space-y-2 text-sm"}, [
                m("div", { class: "flex flex-row items-center space-x-2.5 rounded-md p-2 bg-container font-medium"},  
                    m("svg", {"class":"size-6","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}, 
                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","d":"M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"})
                      ),
                    m("div", "Appearance"),
                ),
                m("div", { class: "flex flex-row items-center space-x-2.5 rounded-md p-2 font-medium"}, 
                    m("svg", {"class":"size-6","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}, 
                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","d":"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"})
                      ),
                    m("div", "Notifications")
                ),
                m("div", { class: "flex flex-row items-center space-x-2.5 rounded-md p-2 font-medium"}, 
                    m("svg", {"class":"size-6","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}, 
                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","d":"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})
                      ),
                    m("div", "Profile")
                ),
                m("div", { class: "flex flex-row items-center space-x-2.5 rounded-md p-2 font-medium"}, 
                    m("svg", {"class":"size-6","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}, 
                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","d":"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})
                      ),
                    m("div", "Team")
                ),
                m("div", { class: "flex flex-row items-center space-x-2.5 rounded-md p-2 font-medium"}, 
                    m("svg", {"class":"size-6","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}, 
                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","d":"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"})
                      ),
                    m("div", "Billing")
                ),
            ]),
            m("div", { class: "w-full flex justify-center" }, [
                m("div", { class: "w-full max-w-7xl"},  [
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
        ])
	}
}


m.mount(document.getElementById("app"), Settings);