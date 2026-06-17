import { motion } from 'framer-motion';

export default function StarField() {
  // ৬০টি তারার জন্য অ্যারে
  const totalStars = 60;
  const stars = Array.from({ length: totalStars });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((_, index) => {
        // র্যান্ডম পজিশন ও প্রপার্টিজ
        const randomTop = Math.floor(Math.random() * 100);
        const randomLeft = Math.floor(Math.random() * 100);
        const randomDuration = 3 + Math.random() * 4;
        const randomDelay = Math.random() * 5;
        
        // কিছু তারকা বড় হবে (২px থেকে ৪px), কিছু ছোট থাকবে
        const size = index % 3 === 0 ? '3px' : index % 5 === 0 ? '4px' : '2px';
        
        // প্রতি ৩টি তারার মধ্যে ১টিকে বাম থেকে ডানে মুভ করানো হবে
        const isMovingStar = index % 3 === 0;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              top: `${randomTop}%`,
              left: `${isMovingStar ? '-5%' : `${randomLeft}%`}`,
              width: size,
              height: size,
            }}
            animate={
              isMovingStar
                ? {
                    // বাম থেকে ডানে মুভিং অ্যানিমেশন
                    left: ['-5%', '105%'],
                    opacity: [0, 0.8, 0.8, 0],
                  }
                : {
                    // জায়গায় দাঁড়িয়ে মিটিমিটি জ্বলার অ্যানিমেশন
                    opacity: [0.1, 1, 0.1],
                    scale: [1, 1.3, 1],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: isMovingStar ? 8 + Math.random() * 7 : randomDuration,
              delay: randomDelay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}