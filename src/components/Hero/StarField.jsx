import { motion } from 'framer-motion';

export default function StarField() {
  const totalItems = 80; // মোট কণার সংখ্যা
  const items = Array.from({ length: totalItems });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {items.map((_, index) => {
        const randomLeft = Math.floor(Math.random() * 100);
        const randomDelay = Math.random() * 10;
        
        // অর্ধেকের বেশি কণা হবে উপর থেকে নিচে পড়া তুষারপাত (Snowflakes)
        const isSnowflake = index % 1.5 === 0;
        
        // খুব ধীর গতির জন্য ডিউরেশন বাড়ানো হয়েছে (১২ থেকে ২৫ সেকেন্ড)
        const randomDuration = 12 + Math.random() * 13;
        
        // তুষার এবং তারার সাইজ (১.৫px থেকে ৩.৫px)
        const size = index % 4 === 0 ? '3.5px' : index % 3 === 0 ? '2.5px' : '1.5px';

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white opacity-0"
            style={{
              left: `${randomLeft}%`,
              width: size,
              height: size,
              // তুষার হলে একদম উপর থেকে শুরু হবে, সাধারণ তারা হলে স্ক্রিনে ছড়ানো থাকবে
              top: isSnowflake ? '-2%' : `${Math.floor(Math.random() * 100)}%`,
              filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))',
            }}
            animate={
              isSnowflake
                ? {
                    // তুষারপাত অ্যানিমেশন: উপর থেকে নিচে নামবে এবং হালকা ডানে-বামে দুলবে
                    top: ['-2%', '105%'],
                    x: [0, Math.random() * 40 - 20, 0],
                    opacity: [0, 0.7, 0.7, 0],
                  }
                : {
                    // ব্যাকগ্রাউন্ডের তারা: খুব ধীরে ধীরে মিটিমিটি জ্বলবে
                    opacity: [0.1, 0.6, 0.1],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: randomDuration,
              delay: randomDelay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}