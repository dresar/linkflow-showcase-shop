
import { Instagram, MessageCircle, Mail, Globe } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Instagram,
      url: "https://instagram.com/yourhandle",
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: MessageCircle,
      url: "https://wa.me/628123456789",
      label: "WhatsApp",
      color: "hover:text-green-500"
    },
    {
      icon: Mail,
      url: "mailto:hello@example.com",
      label: "Email",
      color: "hover:text-blue-500"
    },
    {
      icon: Globe,
      url: "https://example.com",
      label: "Website",
      color: "hover:text-purple-500"
    }
  ];

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:scale-110 ${social.color}`}
          aria-label={social.label}
        >
          <social.icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
