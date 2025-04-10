"use client";
import React, { useEffect, useState } from "react";

type SensorData = {
  timestamp: string;
  sensors: Record<string, Record<string, string>>;
};

export default function TemperatureMonitor() {
  const [data, setData] = useState<SensorData | null>(null);

  useEffect(() => {
    const socket = new WebSocket("wss://api.devhimchan.com/ws"); // it's ok ^^

    socket.onmessage = (event) => {
      try {
        const parsed: SensorData = JSON.parse(event.data);
        setData(parsed);
      } catch (e) {
        console.error("Parsing error:", e);
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    return () => {
      socket.close();
    };
  }, []);

  if (!data) return <div>📡 센서 데이터 수신 중...</div>;

  return (
    <div>
      <h2>
        🖥️ 서버 센서 상태 (최근 {new Date(data.timestamp).toLocaleTimeString()})
      </h2>
      {Object.entries(data.sensors).map(([sensorData], index) => {
        if (index > 9) return null;

        const [device, values] = sensorData?.split(":");

        return (
          <div key={`${device}-${values}`} className='flex gap-2'>
            <h4>{device}</h4>
            <p>{values}</p>
          </div>
        );
      })}
    </div>
  );
}
