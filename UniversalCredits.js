let credits = document.createElement("div"), link = document.createElement("a"), wrapper = document.createElement("div"), text = document.createElement("span"), icon = document.createElement("i")
link.href = "https://github.com/AgentAdam5972/", link.target = "_blank", link.className = "f_col f_center ss_marginright bg_blue4", wrapper.className = "icon-wrap roundme_sm", wrapper.style.backgroundColor = "#5B6FFA", text.className = "sr-only", text.innerText = "Vist the Mod Developer's Github", icon.ariaHidden = "true", icon.className = "text_blue1 fab fa-github", wrapper.appendChild(text), wrapper.appendChild(icon), link.appendChild(wrapper), credits.appendChild(link), document.getElementById("social_panel").insertBefore(credits, document.getElementById("social_panel").childNodes[0])
