'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar,
  Clock,
  CloudRain,
  Compass,
  DollarSign,
  Globe,
  Thermometer,
  Timer,
  Waves
} from 'lucide-react';

// Utility function for class name merging (copied from home page)
const cn = (...classes: (string | boolean | undefined | null | Record<string, boolean>)[]): string => {
  return classes
    .filter(Boolean)
    .map((c) => {
      if (typeof c === "object" && c !== null) {
        return Object.entries(c)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return c;
    })
    .flat()
    .join(" ");
};

const ModuleWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(
      "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
      "border border-border bg-background text-foreground",
      "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
      "hover:-translate-y-0.5 will-change-transform"
    )}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
      </div>
      <div className="relative">
        {children}
      </div>
      <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const WeatherModule = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-blue-500/20 to-blue-500/30 transition-all duration-300">
            <CloudRain className="w-5 h-5 text-blue-500" />
          </div>
          <span className="text-2xl font-semibold">72°F</span>
        </div>
        <span className="text-sm text-muted-foreground">San Francisco</span>
      </div>
      <div className="flex justify-between text-sm text-muted-foreground">
        <div>Humidity: 65%</div>
        <div>Wind: 8 mph</div>
      </div>
    </div>
  );
};

const StockTickerModule = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-green-500/20 to-green-500/30 transition-all duration-300">
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <span className="font-semibold">Market Overview</span>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { symbol: 'AAPL', price: '173.50', change: '+1.2%' },
          { symbol: 'TSLA', price: '238.45', change: '-0.8%' },
          { symbol: 'MSFT', price: '338.11', change: '+0.5%' },
        ].map((stock) => (
          <div key={stock.symbol} className="flex justify-between items-center">
            <span className="font-mono">{stock.symbol}</span>
            <div className="space-x-4">
              <span>${stock.price}</span>
              <span className={stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                {stock.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorldClockModule = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-indigo-500/20 to-indigo-500/30 transition-all duration-300">
          <Clock className="w-5 h-5 text-indigo-500" />
        </div>
        <span className="font-semibold">World Clock</span>
      </div>
      <div className="space-y-3">
        {[
          { city: 'New York', time: '10:30 AM EDT' },
          { city: 'London', time: '3:30 PM BST' },
          { city: 'Tokyo', time: '11:30 PM JST' },
        ].map((zone) => (
          <div key={zone.city} className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">{zone.city}</span>
            <span className="font-mono">{zone.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TideModule = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-cyan-500/20 to-cyan-500/30 transition-all duration-300">
          <Waves className="w-5 h-5 text-cyan-500" />
        </div>
        <span className="font-semibold">Tide Forecast</span>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm">High Tide</span>
          <span className="font-mono">2:45 PM (5.8ft)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Low Tide</span>
          <span className="font-mono">8:30 PM (1.2ft)</span>
        </div>
        <div className="h-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-cyan-500/30 to-cyan-500/20 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

const CompassModule = () => {
  const [heading, setHeading] = useState(0);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-orange-500/20 to-orange-500/30 transition-all duration-300">
          <Compass className="w-5 h-5 text-orange-500" />
        </div>
        <span className="font-semibold">Compass</span>
      </div>
      <div className="flex flex-col items-center">
        <div 
          className="w-32 h-32 rounded-full border-2 border-orange-500 relative"
          style={{ transform: `rotate(${heading}deg)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-8 bg-orange-500 transform -translate-y-2" />
          </div>
          {['N', 'E', 'S', 'W'].map((direction) => (
            <span
              key={direction}
              className="absolute text-sm font-semibold"
              style={{
                transform: `rotate(${-heading}deg)`,
                top: direction === 'N' ? '4px' : direction === 'S' ? 'auto' : '50%',
                bottom: direction === 'S' ? '4px' : 'auto',
                left: direction === 'W' ? '4px' : direction === 'E' ? 'auto' : '50%',
                right: direction === 'E' ? '4px' : 'auto',
                marginTop: ['E', 'W'].includes(direction) ? '-0.5em' : undefined,
                marginLeft: ['N', 'S'].includes(direction) ? '-0.5em' : undefined,
              }}
            >
              {direction}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="359"
            value={heading}
            onChange={(e) => setHeading(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center font-mono mt-2">{heading}°</div>
        </div>
      </div>
    </div>
  );
};

const StopwatchModule = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-purple-500/20 to-purple-500/30 transition-all duration-300">
          <Timer className="w-5 h-5 text-purple-500" />
        </div>
        <span className="font-semibold">Stopwatch</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-mono text-3xl">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
          {("0" + ((time / 10) % 100)).slice(-2)}
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
            onClick={() => setTime(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ModulesPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-4 relative overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 blur-xl scale-110"
        >
          <source src="/videos/video-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="w-full max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Interactive Modules</h1>
          <p className="text-lg text-muted-foreground mt-2">
            A collection of useful interactive modules you can use in your applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ModuleWrapper>
            <WeatherModule />
          </ModuleWrapper>
          <ModuleWrapper>
            <StockTickerModule />
          </ModuleWrapper>
          <ModuleWrapper>
            <WorldClockModule />
          </ModuleWrapper>
          <ModuleWrapper>
            <TideModule />
          </ModuleWrapper>
          <ModuleWrapper>
            <CompassModule />
          </ModuleWrapper>
          <ModuleWrapper>
            <StopwatchModule />
          </ModuleWrapper>
        </div>
      </div>
    </div>
  );
} 