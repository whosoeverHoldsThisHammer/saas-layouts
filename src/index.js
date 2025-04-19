import m from "mithril";

const helloWorld = {
	view: function(vnode) {
		return m("div", { class: "text-xl font-medium text-primary"}, "hello world")
	}
}


m.mount(document.getElementById("app"), helloWorld);