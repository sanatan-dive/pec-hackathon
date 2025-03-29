"use client";
import { useState } from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";;
import { Youtube, BookOpen, PlayCircle, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";


export default function Landing() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const placeholders = ["Enter your Topic", "Learn Anything", "Master Anything"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push(`/resources/landing?query=${encodeURIComponent(query)}`);
    } catch (error) {
      console.error("Error navigating to landing page:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleResources = [
    {
      type: "YouTube Playlists",
      title: "Complete Web Development Bootcamp",
      icon: Youtube,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "group-hover:border-red-500/50",
    },
    {
      type: "Coursera Courses",
      title: "Machine Learning Specialization",
      icon: BookOpen,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "group-hover:border-blue-500/50",
    },
    {
      type: "Udemy Courses",
      title: "Python for Data Science",
      icon: PlayCircle,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "group-hover:border-purple-500/50",
    },
    {
      type: "Medium blogs",
      title: "Getting Started with React",
      icon: FileText,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "group-hover:border-green-500/50",
    },
  ];

  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center w-full  p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-[1000px] mx-auto mt-8 px-4 text-center"
      >
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Find the Best Resources on Any Topic
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-6">
          Discover curated learning resources from top platforms
        </p>
        <h2 className="font-serif text-3xl text-white font-bold tracking-tight mb-4">
          All In One Place
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-3xl px-4 mb-8"
      >
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
          disabled={isLoading}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl mx-auto px-4 mb-12"
      >
        {sampleResources.map((resource, index) => (
          <Card
            key={index}
            className={cn(
              "p-4 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-800 bg-gray-900/50 backdrop-blur-sm group hover:-translate-y-1",
              resource.borderColor
            )}
          >
            <div className={cn(resource.bgColor, "p-3 rounded-lg inline-block mb-4")}>
              <resource.icon className={cn("h-6 w-6", resource.color)} />
            </div>
            <h3 className="font-semibold mb-2 text-gray-100 text-sm">{resource.type}</h3>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              {resource.title}
            </p>
          </Card>
        ))}
      </motion.div>

  

      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gray-900 p-8 rounded-xl shadow-xl shadow-purple-500/10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        </div>
      )}
    </div>
  );
}