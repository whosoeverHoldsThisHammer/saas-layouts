import m from "mithril";
import { setTheme } from "./../utils/setter"

const Settings = {
	view: function(vnode) {
		return m("div", { class: "flex flex-row text-surface"}, [
            m("div", { class: "shrink-0 py-8 px-6 pb-4 w-80 space-y-2 text-sm"}, [
                m("div", { class: "flex flex-row items-center space-x-2.5 rounded-md p-2 bg-container font-medium cursor-pointer"},  
                    m("svg", {"class":"size-6","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"}, 
                        m("path", {"fill-rule":"evenodd","d":"M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z","clip-rule":"evenodd"})
                      ),
                    m("div", "Appearance"),
                ),
                m("div", { class: "flex flex-row items-center space-x-2.5 rounded-md p-2 font-medium text-surfacevariant cursor-pointer hover:bg-container"}, 
                    m("svg", {"class":"size-6","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}, 
                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","d":"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"})
                      ),
                    m("div", "Notifications")
                ),
                m("div", { class: "flex flex-row items-center space-x-2.5 rounded-md p-2 font-medium text-surfacevariant cursor-pointer hover:bg-container"}, 
                    m("svg", {"class":"size-6","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}, 
                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","d":"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})
                      ),
                    m("div", "Profile")
                ),
                m("div", { class: "flex flex-row items-center space-x-2.5 rounded-md p-2 font-medium text-surfacevariant cursor-pointer hover:bg-container"}, 
                    m("svg", {"class":"size-6","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}, 
                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","d":"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})
                      ),
                    m("div", "Team")
                ),
                m("div", { class: "flex flex-row items-center space-x-2.5 rounded-md p-2 font-medium text-surfacevariant cursor-pointer hover:bg-container"}, 
                    m("svg", {"class":"size-6","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}, 
                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","d":"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"})
                      ),
                    m("div", "Billing")
                ),
            ]),
            m("div", { class: "py-8 px-6 w-full flex justify-center" }, [
                m("div", { class: "w-full max-w-7xl"},  [
                    m("div", { class: "mb-8 text-lg font-medium"}, "Appearance"),
                    m("div", { class: "mb-6 text-sm font-medium"}, "Theme"),
                    m("div", { class: "flex flex-row items-center space-x-8 text-sm"}, [
                        m("div", { class: "cursor-pointer", onclick: ()=> setTheme("light")} , [
                            m("div", { class: "h-24 w-40 mb-4 rounded-lg bg-white border border-gray-400/50" } ),
                            m("div", "Light")
                        ]),
                        m("div", { class: "cursor-pointer", onclick: ()=> setTheme("dark")} , [
                            m("div", { class: "h-24 w-40 mb-4 rounded-lg bg-gray-800 border border-gray-500/50"} ),
                            m("div", "Dark")
                        ]),
                        m("div", { class: "cursor-pointer", onclick: ()=> setTheme("lime")} , [
                            m("div", { class: "h-24 w-40 mb-4 rounded-lg bg-lime-500 border border-lime-500/50"} ),
                            m("div", "Lime")
                        ]),
                        m("div", { class: "cursor-pointer", onclick: ()=> setTheme("rose")} , [
                            m("div", { class: "h-24 w-40 mb-4 rounded-lg bg-rose-400 border border-rose-500/50"} ),
                            m("div", "Rosé")
                        ])
                    ])
                ])
            ])
        ])
	}
}


m.mount(document.getElementById("app"), Settings);