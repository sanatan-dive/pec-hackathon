// Define the Mentor type interface
interface Mentor {
    id: string;
    name: string;
    profileImage: string;
    hourlyRate: number;
    domains: string[];
    bio: string;
    availability: string;
  }
  
  // Mock function to simulate API fetch
  const fetchMentors = async (): Promise<Mentor[]> => {
    // In a real app, this would be an API call
    return mentorsData;
  };
  
  // Hard-coded mentors data
  const mentorsData: Mentor[] = [
    {
      id: "m1",
      name: "Sarah Johnson",
      profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      hourlyRate: 150,
      domains: ["Business Strategy", "Marketing", "Leadership"],
      bio: "Former CMO with 15+ years experience helping startups scale from zero to millions in revenue. Specializes in go-to-market strategies and building high-performance teams.",
      availability: "Weekdays, 9 AM - 5 PM EST"
    },
    {
      id: "m2",
      name: "Michael Chen",
      profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      hourlyRate: 200,
      domains: ["Finance", "Business Strategy", "Technology"],
      bio: "Serial entrepreneur with 3 successful exits. Angel investor and advisor to 20+ startups. Passionate about helping founders navigate fundraising and financial planning.",
      availability: "Tuesdays and Thursdays, flexible hours"
    },
    {
      id: "m3",
      name: "Elena Rodriguez",
      profileImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      hourlyRate: 175,
      domains: ["Product Development", "Technology", "Leadership"],
      bio: "Product leader who scaled products from zero to 10M+ users at top tech companies. Expert in product strategy, user-centric design, and building technical teams.",
      availability: "Weekends and evenings (PST)"
    },
    {
      id: "m4",
      name: "David Washington",
      profileImage: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      hourlyRate: 125,
      domains: ["Sales", "Marketing", "Business Strategy"],
      bio: "Sales expert who built and led teams that closed $50M+ in annual revenue. Specializes in B2B sales strategies, pipeline development, and sales team management.",
      availability: "Monday, Wednesday, Friday, 10 AM - 6 PM CST"
    },
    {
      id: "m5",
      name: "Priya Patel",
      profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      hourlyRate: 220,
      domains: ["Technology", "Product Development", "Leadership"],
      bio: "CTO with expertise in scaling engineering teams and technical architecture. Has led development at both startups and Fortune 500 companies across fintech and healthcare.",
      availability: "Weekdays, early mornings and evenings (IST)"
    },
    {
      id: "m6",
      name: "James Wilson",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      hourlyRate: 165,
      domains: ["Finance", "Business Strategy", "Leadership"],
      bio: "Former CFO with experience taking companies from startup to IPO. Expert in financial modeling, fundraising strategy, and investor relations.",
      availability: "Tuesdays and Fridays, all day"
    },
    {
      id: "m7",
      name: "Sofia Martinez",
      profileImage: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      hourlyRate: 185,
      domains: ["Marketing", "Sales", "Business Strategy"],
      bio: "Growth marketing specialist who's helped 30+ startups achieve product-market fit. Expert in customer acquisition, retention strategies, and marketing analytics.",
      availability: "Flexible schedule, by appointment"
    },
    {
      id: "m8",
      name: "Robert Kim",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      hourlyRate: 195,
      domains: ["Technology", "Product Development", "Finance"],
      bio: "Tech entrepreneur and investor with deep expertise in AI and machine learning applications for business. Has built and sold 4 tech companies in the last decade.",
      availability: "Weekdays, 6 PM - 10 PM EST"
    },
    {
      id: "m9",
      name: "Olivia Taylor",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      hourlyRate: 140,
      domains: ["Leadership", "Business Strategy", "Marketing"],
      bio: "Executive coach with background in organizational psychology. Specializes in leadership development, team dynamics, and building healthy company cultures.",
      availability: "Monday through Thursday, 11 AM - 7 PM PST"
    }
  ];
  
  export { fetchMentors, mentorsData };
  export type { Mentor };