'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar,
  Clock,
  CloudRain,
  MessageSquare,
  DollarSign,
  Globe,
  Thermometer,
  Timer,
  Waves,
  X,
  Send
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
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
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Weather Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <CloudRain className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-3xl font-semibold">72°F</div>
                <div className="text-muted-foreground">Partly Cloudy</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Humidity</div>
                <div className="text-lg">65%</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Wind</div>
                <div className="text-lg">8 mph NW</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Pressure</div>
                <div className="text-lg">1012 hPa</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Visibility</div>
                <div className="text-lg">10 km</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Hourly Forecast</div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {[
                  { time: "Now", temp: "72°F" },
                  { time: "1PM", temp: "74°F" },
                  { time: "2PM", temp: "75°F" },
                  { time: "3PM", temp: "74°F" },
                  { time: "4PM", temp: "73°F" },
                ].map((hour) => (
                  <div key={hour.time} className="flex flex-col items-center gap-1">
                    <div className="text-sm">{hour.time}</div>
                    <CloudRain className="w-5 h-5 text-blue-500" />
                    <div className="text-sm font-medium">{hour.temp}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const StockTickerModule = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
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
      </div>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Market Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Market Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-medium">Market Open</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Trading Volume</div>
                <div className="font-medium">1.2B shares</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Trending Stocks</div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { symbol: 'AAPL', name: 'Apple Inc.', price: '173.50', change: '+1.2%', volume: '52.3M' },
                  { symbol: 'TSLA', name: 'Tesla, Inc.', price: '238.45', change: '-0.8%', volume: '48.1M' },
                  { symbol: 'MSFT', name: 'Microsoft Corporation', price: '338.11', change: '+0.5%', volume: '25.7M' },
                  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: '445.20', change: '+2.1%', volume: '35.2M' },
                  { symbol: 'META', name: 'Meta Platforms, Inc.', price: '312.75', change: '+0.7%', volume: '18.9M' },
                ].map((stock) => (
                  <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="space-y-1">
                      <div className="font-medium">{stock.name}</div>
                      <div className="text-sm text-muted-foreground">{stock.symbol}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono">${stock.price}</div>
                      <div className={cn(
                        "text-sm font-medium",
                        stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                      )}>
                        {stock.change}
                      </div>
                      <div className="text-sm text-muted-foreground">Vol: {stock.volume}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const WorldClockModule = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
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
      </div>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>World Clock</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-4">
            {[
              { city: 'New York', time: '10:30 AM EDT', date: 'Mon, Apr 15', offset: '-4:00' },
              { city: 'London', time: '3:30 PM BST', date: 'Mon, Apr 15', offset: '+1:00' },
              { city: 'Tokyo', time: '11:30 PM JST', date: 'Mon, Apr 15', offset: '+9:00' },
              { city: 'Sydney', time: '1:30 AM AEST', date: 'Tue, Apr 16', offset: '+10:00' },
              { city: 'Dubai', time: '6:30 PM GST', date: 'Mon, Apr 15', offset: '+4:00' },
              { city: 'Paris', time: '4:30 PM CEST', date: 'Mon, Apr 15', offset: '+2:00' },
            ].map((zone) => (
              <div key={zone.city} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="space-y-1">
                  <div className="font-medium">{zone.city}</div>
                  <div className="text-sm text-muted-foreground">UTC {zone.offset}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-lg">{zone.time}</div>
                  <div className="text-sm text-muted-foreground">{zone.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TideModule = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
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
      </div>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Tide Forecast</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium">San Francisco Bay</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Moon Phase</div>
                <div className="font-medium">First Quarter</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Today's Tides</div>
              <div className="space-y-3">
                {[
                  { type: 'Low Tide', time: '3:15 AM', height: '0.5 ft' },
                  { type: 'High Tide', time: '9:30 AM', height: '5.2 ft' },
                  { type: 'Low Tide', time: '2:45 PM', height: '1.2 ft' },
                  { type: 'High Tide', time: '8:30 PM', height: '5.8 ft' },
                ].map((tide) => (
                  <div key={tide.time} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="space-y-1">
                      <div className="font-medium">{tide.type}</div>
                      <div className="text-sm text-muted-foreground">{tide.time}</div>
                    </div>
                    <div className="font-mono text-lg">{tide.height}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Water Conditions</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Water Temp</div>
                  <div className="text-lg">62°F</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Wave Height</div>
                  <div className="text-lg">2-3 ft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ChatModule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setMessages([
      ...messages,
      { id: messages.length + 1, text: message, sender: 'user' },
    ]);
    setMessage('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          id: prev.length + 1, 
          text: 'Thanks for your message! This is a demo response.', 
          sender: 'bot' 
        },
      ]);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-violet-500/20 to-violet-500/30 transition-all duration-300">
              <MessageSquare className="w-5 h-5 text-violet-500" />
            </div>
            <span className="font-semibold">Chat</span>
          </div>
          <div className="space-y-3">
            <div className="text-sm text-muted-foreground">Recent messages</div>
            <div className="space-y-2">
              {messages.slice(-2).map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "text-sm p-2 rounded-lg",
                    msg.sender === 'user' 
                      ? "bg-primary text-primary-foreground ml-auto" 
                      : "bg-muted"
                  )}
                  style={{ maxWidth: '80%' }}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Chat</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-[400px]">
          <div className="flex-1 overflow-y-auto space-y-4 p-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex",
                  msg.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg text-sm",
                    msg.sender === 'user'
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t p-4 flex gap-2">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="flex-1"
            />
            <Button
              size="icon"
              onClick={handleSendMessage}
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const StopwatchModule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const handleReset = () => {
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  const formatTime = (ms: number) => {
    return {
      minutes: ("0" + Math.floor((ms / 60000) % 60)).slice(-2),
      seconds: ("0" + Math.floor((ms / 1000) % 60)).slice(-2),
      milliseconds: ("0" + ((ms / 10) % 100)).slice(-2)
    };
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-purple-500/20 to-purple-500/30 transition-all duration-300">
              <Timer className="w-5 h-5 text-purple-500" />
            </div>
            <span className="font-semibold">Stopwatch</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-mono text-3xl">
              {formatTime(time).minutes}:
              {formatTime(time).seconds}.
              {formatTime(time).milliseconds}
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsRunning(!isRunning);
                }}
              >
                {isRunning ? 'Stop' : 'Start'}
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Stopwatch</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <div className="font-mono text-5xl">
                {formatTime(time).minutes}:
                {formatTime(time).seconds}.
                {formatTime(time).milliseconds}
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <button
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => setIsRunning(!isRunning)}
              >
                {isRunning ? 'Stop' : 'Start'}
              </button>
              <button
                className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                onClick={handleLap}
                disabled={!isRunning}
              >
                Lap
              </button>
              <button
                className="px-6 py-3 rounded-lg border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
            {laps.length > 0 && (
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Laps</div>
                <div className="max-h-[200px] overflow-y-auto space-y-2">
                  {laps.map((lapTime, index) => (
                    <div key={index} className="flex justify-between items-center p-2 rounded-lg border">
                      <span className="text-sm text-muted-foreground">Lap {laps.length - index}</span>
                      <span className="font-mono">
                        {formatTime(lapTime).minutes}:
                        {formatTime(lapTime).seconds}.
                        {formatTime(lapTime).milliseconds}
                      </span>
                    </div>
                  )).reverse()}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
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
            <ChatModule />
          </ModuleWrapper>
          <ModuleWrapper>
            <StopwatchModule />
          </ModuleWrapper>
        </div>
      </div>
    </div>
  );
} 