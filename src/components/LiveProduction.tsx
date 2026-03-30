import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Scale } from 'lucide-react';

export function LiveProduction() {
  const [produced, setProduced] = useState(0);
  
  // 1.3 tons per hour = 1300 kg per hour
  const speedKgPerHour = 1300;
  const updateIntervalMs = 50; // Update every 50ms for smooth counter
  
  // How much is produced in one interval (50ms)
  // 1300 kg / 3600 seconds = 0.3611 kg/sec
  // 0.3611 kg/sec * 0.05 sec = 0.018055 kg per 50ms
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
      className="bg-viant-950/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-viant-800 relative w-full max-w-md mx-auto"
    >
      {/* Background accent glow */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-brand-accent rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      
      <div className="p-6 md:p-8 relative z-10 flex flex-col gap-8">
        
        {/* Machine Info */}
        <div className="flex items-center gap-5">
          <div className="relative w-16 h-16 flex items-center justify-center bg-viant-900 rounded-full border-2 border-brand-accent/30 shrink-0">
            {/* Spinning gear */}
            <Settings className="w-8 h-8 text-brand-accent animate-[spin_3s_linear_infinite]" />
            {/* Outer spinning ring */}
            <div className="absolute inset-0 rounded-full border-t-2 border-brand-accent animate-[spin_1.5s_linear_infinite]"></div>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </div>
              <span className="text-green-400 text-[10px] font-bold uppercase tracking-wider">В работе</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Промышленный волчок</h3>
            <p className="text-viant-300 text-xs">Производительность: <span className="font-semibold text-white">1.3 т/ч</span></p>
          </div>
        </div>

        {/* Live Counter */}
        <div className="bg-viant-900/50 rounded-xl p-5 border border-viant-800 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-viant-400 text-xs font-medium uppercase tracking-wider">Произведено за сеанс</span>
            <Scale className="w-4 h-4 text-brand-accent" />
          </div>
          
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-mono font-bold text-white tracking-tight">
              {produced.toFixed(2)}
            </span>
            <span className="text-viant-400 font-medium text-sm">кг</span>
          </div>
          
          {/* Product flow simulation */}
          <div className="mt-5 relative">
            <div className="flex justify-between text-[10px] text-viant-500 mb-1 uppercase font-bold tracking-wider">
              <span>Сырьё</span>
              <span>Фарш</span>
            </div>
            <div className="h-1.5 bg-viant-800 rounded-full overflow-hidden relative">
              {/* Moving dots to simulate flow */}
              <motion.div 
                className="absolute top-0 left-0 h-full w-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjEwIiByPSIyIiBmaWxsPSIjMDA2NmZmIi8+PC9zdmc+')] opacity-70"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
