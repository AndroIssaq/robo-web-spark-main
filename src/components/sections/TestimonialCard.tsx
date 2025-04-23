import { cn } from "@/lib/utils"

interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
}

export function TestimonialCard({ author, text, href }: TestimonialCardProps) {
  return (
    <div className="flex w-[350px] shrink-0 flex-col gap-4 rounded-lg border border-mint-200 bg-mint-50 p-6 text-card-foreground shadow-sm dark:border-mint-800 dark:bg-mint-900">
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <img
            src={author.avatar}
            alt={author.name}
            className="object-cover h-full w-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-black dark:text-white">{author.name}</span>
          <span className="text-sm text-mint-600 dark:text-mint-300">{author.handle}</span>
        </div>
      </div>
      <p className="text-sm text-mint-600 dark:text-mint-300">{text}</p>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-mint-600 hover:underline dark:text-mint-300"
        >
          Read more
        </a>
      )}
    </div>
  )
}

// Example testimonials data
export const testimonials = [
  {
    author: {
      name: "Amira Hassan",
      handle: "@amira_tech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "RoboWeb's AI chatbot has revolutionized our customer service. Response times have improved by 80% and customer satisfaction is at an all-time high.",
    href: "https://twitter.com/amira_tech"
  },
  {
    author: {
      name: "Mohamed El-Sayed",
      handle: "@mohamed_ai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The voice assistant integration has transformed our business operations. Our team can now focus on strategic tasks while routine processes are automated.",
    href: "https://twitter.com/mohamed_ai"
  },
  {
    author: {
      name: "Nour Ahmed",
      handle: "@nour_web",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Our new website with RoboWeb's AI features has significantly increased our online presence. The smart recommendations and personalized user experience are outstanding."
  },
  {
    author: {
      name: "Amira Hassan",
      handle: "@amira_tech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "RoboWeb's AI chatbot has revolutionized our customer service. Response times have improved by 80% and customer satisfaction is at an all-time high.",
    href: "https://twitter.com/amira_tech"
  },
  {
    author: {
      name: "Mohamed El-Sayed",
      handle: "@mohamed_ai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The voice assistant integration has transformed our business operations. Our team can now focus on strategic tasks while routine processes are automated.",
    href: "https://twitter.com/mohamed_ai"
  },
  {
    author: {
      name: "Nour Ahmed",
      handle: "@nour_web",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Our new website with RoboWeb's AI features has significantly increased our online presence. The smart recommendations and personalized user experience are outstanding."
  }
] 