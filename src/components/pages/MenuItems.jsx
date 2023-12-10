import { FaDiscord } from "react-icons/fa";

// holds the different pages for the drop dowm menu
// this easily allows for more pages to be added to the website 
export const MenuItems = [
    {
        title:<a href="https://discord.gg/xrRTJsBukF" target="_blank" rel="noopener noreferrer" className="discord-button">
            <FaDiscord /> Discord
            </a>,
        
        cName: "dropdown-link"
        
    },
    {
        title:"Resources",
        path:"/Resources",
        cName: "dropdown-link"
    }

];