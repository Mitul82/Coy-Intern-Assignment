const seedProfiles = [
    {
      name: "Ananya Sharma",
      age: 23,
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
      bio: "Coffee snob & indie music fan ☕",
      city_or_college: "Delhi University",
      interests: "Coffee, Indie Music, Reading",
      likedLoggedInUser: true
    },
    {
      name: "Rohan Verma",
      age: 24,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
      bio: "Weekend coder, weekday trekker 🏔️",
      city_or_college: "IIT Delhi",
      interests: "Coding, Trekking, Sci-Fi",
      likedLoggedInUser: false
    },
    {
      name: "Priya Nair",
      age: 22,
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60",
      bio: "Looking for someone to try out hidden cafes with.",
      city_or_college: "St. Xavier's Mumbai",
      interests: "Cafes, Photography, Art",
      likedLoggedInUser: true
    },
    {
      name: "Kabir Mehta",
      age: 25,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
      bio: "Badminton enthusiast and amateur chef 🍳",
      city_or_college: "BITS Pilani",
      interests: "Badminton, Cooking, Podcasts",
      likedLoggedInUser: false
    },
    {
      name: "Sneha Iyer",
      age: 23,
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
      bio: "Fashion design student. Always losing my earphones.",
      city_or_college: "NIFT Bangalore",
      interests: "Fashion, Design, Music",
      likedLoggedInUser: false
    },
    {
      name: "Arjun Kapoor",
      age: 24,
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60",
      bio: "Finance geek by day, FIFA champion by night 🎮",
      city_or_college: "SRCC Delhi",
      interests: "Finance, Gaming, Football",
      likedLoggedInUser: true
    },
    {
      name: "Riya Sen",
      age: 22,
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60",
      bio: "Plant mom and book hoarder 📚",
      city_or_college: "Christ University",
      interests: "Plants, Reading, Yoga",
      likedLoggedInUser: false
    },
    {
      name: "Devansh Gupta",
      age: 25,
      photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60",
      bio: "Tech startup enthusiast. Let's talk AI or Formula 1.",
      city_or_college: "DTU Delhi",
      interests: "Startups, AI, F1",
      likedLoggedInUser: false
    },
    {
      name: "Tanvi Joshi",
      age: 23,
      photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60",
      bio: "Chai over coffee, always. Dogs > Humans.",
      city_or_college: "Symbiosis Pune",
      interests: "Chai, Dogs, Travel",
      likedLoggedInUser: true
    },
    {
      name: "Aditya Rao",
      age: 24,
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
      bio: "Surfing, coding, and bad karaoke.",
      city_or_college: "Manipal University",
      interests: "Surfing, Tech, Karaoke",
      likedLoggedInUser: false
    },
    {
      name: "Meera Pillai",
      age: 22,
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60",
      bio: "History buff and museum crawler 🏛️",
      city_or_college: "Miranda House",
      interests: "History, Museums, Baking",
      likedLoggedInUser: false
    },
    {
      name: "Nikhil Das",
      age: 25,
      photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60",
      bio: "Data scientist trying to build the next big thing.",
      city_or_college: "NIT Trichy",
      interests: "Data Science, Running, Crypto",
      likedLoggedInUser: true
    },
    {
      name: "Shreya Roy",
      age: 23,
      photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60",
      bio: "Writer, cinephile, and amateur guitarist 🎸",
      city_or_college: "Jadavpur University",
      interests: "Writing, Cinema, Music",
      likedLoggedInUser: false
    },
    {
      name: "Varun Kulkarni",
      age: 24,
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60",
      bio: "Mechanical engineer fixing everything except my sleep schedule.",
      city_or_college: "COEP Pune",
      interests: "Engineering, Cycling, Marvel",
      likedLoggedInUser: false
    },
    {
      name: "Pooja Menon",
      age: 22,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
      bio: "Design thinker and sunset chaser 🌅",
      city_or_college: "Stella Maris",
      interests: "Design, Sunsets, Boba",
      likedLoggedInUser: true
    },
    {
      name: "Siddharth Varma",
      age: 25,
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60",
      bio: "Building apps and brewing cold brew ☕",
      city_or_college: "IIIT Hyderabad",
      interests: "Coding, Coffee, Anime",
      likedLoggedInUser: false
    },
    {
      name: "Neha Aggarwal",
      age: 23,
      photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60",
      bio: "Debater, lawyer-in-making, and foodie.",
      city_or_college: "LSR Delhi",
      interests: "Law, Food, Debate",
      likedLoggedInUser: false
    },
    {
      name: "Karan Malhotra",
      age: 24,
      photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60",
      bio: "Marketing guy with too many opinions on movies.",
      city_or_college: "NMIMS Mumbai",
      interests: "Marketing, Movies, Fitness",
      likedLoggedInUser: true
    },
    {
      name: "Ishita Banerjee",
      age: 22,
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
      bio: "Art director and indie gig hopper.",
      city_or_college: "Presidency Kolkata",
      interests: "Art, Gigs, Poetry",
      likedLoggedInUser: false
    },
    {
      name: "Mayank Joshi",
      age: 25,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
      bio: "Cloud architect and gamer 🕹️",
      city_or_college: "VIT Vellore",
      interests: "Cloud, Gaming, Board Games",
      likedLoggedInUser: false
    },
    {
      name: "Ritika Sen",
      age: 23,
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
      bio: "Psychology major reading minds and novels.",
      city_or_college: "Gargi College",
      interests: "Psychology, Books, Theatre",
      likedLoggedInUser: true
    },
    {
      name: "Aman Saxena",
      age: 24,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
      bio: "Product builder and football fanatic ⚽",
      city_or_college: "NSUT Delhi",
      interests: "Product, Football, Startup",
      likedLoggedInUser: false
    },
    {
      name: "Diya Chatterjee",
      age: 22,
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60",
      bio: "Journalism student chasing good stories.",
      city_or_college: "St. Xavier's Kolkata",
      interests: "Journalism, Travel, Jazz",
      likedLoggedInUser: false
    },
    {
      name: "Zaid Khan",
      age: 25,
      photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60",
      bio: "Architect designing spaces and dreaming of mountains.",
      city_or_college: "Jamia Millia",
      interests: "Architecture, Mountains, Photography",
      likedLoggedInUser: true
    },
    {
      name: "Kavya Nambiar",
      age: 23,
      photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60",
      bio: "Economist by qualification, baker by passion 🧁",
      city_or_college: "Mount Carmel",
      interests: "Economics, Baking, Running",
      likedLoggedInUser: false
    },
    {
      name: "Raghav Sharma",
      age: 24,
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
      bio: "Robotics engineer and sci-fi geek.",
      city_or_college: "PEC Chandigarh",
      interests: "Robotics, Sci-Fi, Chess",
      likedLoggedInUser: false
    },
    {
      name: "Simran Kaur",
      age: 22,
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60",
      bio: "Makeup artist and reality TV addict 🍿",
      city_or_college: "Jesus and Mary College",
      interests: "Makeup, Reality TV, Fashion",
      likedLoggedInUser: true
    },
    {
      name: "Tushar Deshmukh",
      age: 25,
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60",
      bio: "Full-stack developer building cool side projects.",
      city_or_college: "VJTI Mumbai",
      interests: "Web Dev, Open Source, Basketball",
      likedLoggedInUser: false
    },
    {
      name: "Akanksha Dubey",
      age: 23,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
      bio: "Classical dancer and literature lover 📖",
      city_or_college: "Banaras Hindu University",
      interests: "Dance, Literature, History",
      likedLoggedInUser: false
    },
    {
      name: "Yuvraj Singh",
      age: 24,
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60",
      bio: "Law student, quizzer, and amateur photographer 📸",
      city_or_college: "St. Stephen's Delhi",
      interests: "Quizzing, Photography, History",
      likedLoggedInUser: true
    }
]

export default seedProfiles;