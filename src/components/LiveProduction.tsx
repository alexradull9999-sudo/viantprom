import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Scale } from 'lucide-react';

export function LiveProduction() {
  const [produced, setProduced] = useState(0);
  
  // 10 tons per hour = 10000 kg per hour
  const speedKgPerHour = 10000;
  const updateIntervalMs = 50; // Update every 50ms for smooth counter
  
  // How much is produced in one interval (50ms)
  // 10000 kg / 3600 seconds = 2.7777 kg/sec
  // 2.7777 kg/sec * 0.05 sec = 0.13888 kg per 50ms
  const incrementPerInterval = speedKgPerHour / (3600 * (1000 / updateIntervalMs));

  useEffect(() => {
    const interval = setInterval(() => {
      setProduced(prev => prev + incrementPerInterval);
    }, updateIntervalMs);
    
    return () => clearInterval(interval);
  }, [incrementPerInterval]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-viant-100 relative w-full max-w-md mx-auto"
    >
      <div className="p-8 relative z-10 flex flex-col gap-8">
        
        {/* Machine Info */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 flex items-center justify-center bg-viant-50 rounded-xl shrink-0">
            <Settings className="w-7 h-7 text-viant-400 animate-[spin_4s_linear_infinite]" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-green-600 text-[10px] font-bold uppercase tracking-widest">В работе</span>
            </div>
            <h3 className="text-base font-bold text-viant-900 leading-tight">Промышленный волчок</h3>
            <p className="text-viant-400 text-[10px]">Производительность: 10 т/ч</p>
          </div>
        </div>

        {/* Live Counter */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-viant-300 text-[10px] font-bold uppercase tracking-widest">Произведено за сеанс</span>
          </div>
          
          <div className="flex items-baseline space-x-2">
            <span className="text-6xl font-bold text-viant-900 tracking-tighter">
              {produced.toFixed(2).split('.')[0]}
              <span className="text-viant-900/90">.{produced.toFixed(2).split('.')[1]}</span>
            </span>
            <span className="text-viant-300 font-bold text-sm">кг</span>
          </div>
          
          {/* Product flow simulation */}
          <div className="pt-4">
            <div className="h-2 bg-viant-50 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-brand-accent rounded-full"
                animate={{ width: ["10%", "85%"] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-viant-300 mt-2 uppercase font-bold tracking-widest">
              <span>Сырьё</span>
              <span>Фарш</span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
