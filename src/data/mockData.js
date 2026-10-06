export const brandsData = [
  { id: 1, name: 'nexperia', type: 'text', style: { color: '#005baa', fontWeight: '800', letterSpacing: '-0.5px', fontSize: '1.25rem' }, tag: 'Semiconductors' },
  { id: 2, name: 'TE connectivity', type: 'logo-te', tag: 'Connectors & Sensors' },
  { id: 3, name: 'PRECI-DIP', type: 'text', style: { color: '#1e293b', fontWeight: '900', letterSpacing: '1.5px', fontSize: '1.15rem' }, tag: 'Precision Interconnect' },
  { id: 4, name: 'ZEISS', type: 'logo-zeiss', tag: 'Quality & Optics' },
  { id: 5, name: 'Amphenol', type: 'text', style: { color: '#004b87', fontWeight: '800', fontStyle: 'italic', fontSize: '1.25rem' }, tag: 'Interconnect Systems' },
  { id: 6, name: 'ST life.augmented', type: 'logo-st', tag: 'Microcontrollers & Power' },
  { id: 7, name: 'Texas Instruments', type: 'text', style: { color: '#cc0000', fontWeight: '800', fontSize: '1.1rem' }, tag: 'Analog & Embedded' },
  { id: 8, name: 'Microchip', type: 'text', style: { color: '#e31837', fontWeight: '800', letterSpacing: '0.5px', fontSize: '1.15rem' }, tag: 'Microcontrollers' }
];

export const heroStats = [
  {
    id: 1,
    title: '20+ Years',
    subtitle: 'Industry Experience',
    icon: 'ShieldCheck'
  },
  {
    id: 2,
    title: 'Global Supply',
    subtitle: 'Network',
    icon: 'Globe'
  },
  {
    id: 3,
    title: 'Quality Assured',
    subtitle: 'Components',
    icon: 'Award'
  },
  {
    id: 4,
    title: 'Worldwide',
    subtitle: 'Support',
    icon: 'Headphones'
  }
];

export const searchSuggestions = [
  { partNumber: 'STM32F407VGT6', mfg: 'STMicroelectronics', desc: 'ARM Cortex-M4 32-bit MCU, 1MB Flash, 168MHz', stock: '24,500 pcs in stock', price: '$8.45' },
  { partNumber: 'ESP32-WROOM-32D', mfg: 'Espressif Systems', desc: 'Wi-Fi + BT + BLE MCU Module with 4MB Flash', stock: '18,200 pcs in stock', price: '$2.90' },
  { partNumber: 'LM2596S-ADJ', mfg: 'Texas Instruments', desc: 'SIMPLE SWITCHER 3A Step-Down Voltage Regulator', stock: '45,000 pcs in stock', price: '$0.85' },
  { partNumber: 'NE555DR', mfg: 'Texas Instruments', desc: 'Single Precision Timer IC, SOIC-8', stock: '120,000 pcs in stock', price: '$0.18' },
  { partNumber: 'ATMEGA328P-AU', mfg: 'Microchip Technology', desc: '8-bit AVR Microcontroller, 32KB Flash, TQFP-32', stock: '15,600 pcs in stock', price: '$1.75' },
  { partNumber: 'BME280', mfg: 'Bosch Sensortec', desc: 'Digital Humidity, Pressure and Temperature Sensor', stock: '9,400 pcs in stock', price: '$4.20' },
  { partNumber: 'TPS5430DDAR', mfg: 'Texas Instruments', desc: '3A 36V Step Down DC/DC Converter with Eco-mode', stock: '32,100 pcs in stock', price: '$1.45' },
  { partNumber: '2N7002', mfg: 'Nexperia', desc: '60 V, 300 mA N-channel Trench MOSFET, SOT-23', stock: '250,000 pcs in stock', price: '$0.04' }
];

export const productCategories = [
  {
    id: 'semiconductors',
    name: 'Semiconductors & ICs',
    desc: 'Microcontrollers, Memory, Logic ICs, Amplifiers, Power Management ICs (PMIC).',
    count: '450,000+ Items',
    icon: 'Cpu',
    badge: 'High Demand'
  },
  {
    id: 'passive',
    name: 'Passive Components',
    desc: 'Capacitors, High Precision Resistors, Inductors, Chokes, Ferrite Beads.',
    count: '1,200,000+ Items',
    icon: 'Layers',
    badge: 'In Stock'
  },
  {
    id: 'electromechanical',
    name: 'Electromechanical & Relays',
    desc: 'Solid State Relays, Switches, Encoders, Motors, Industrial Contactors.',
    count: '180,000+ Items',
    icon: 'ToggleRight',
    badge: 'Fast Dispatch'
  },
  {
    id: 'connectors',
    name: 'Connectors & Interconnect',
    desc: 'Automotive Headers, Board-to-Board, RF Coaxial, Terminal Blocks, Circular.',
    count: '320,000+ Items',
    icon: 'Cable',
    badge: 'OEM Certified'
  },
  {
    id: 'optoelectronics',
    name: 'Optoelectronics & Displays',
    desc: 'TFT/OLED Panels, High-Power LEDs, Photodiodes, Optical Transceivers.',
    count: '95,000+ Items',
    icon: 'Sun',
    badge: 'Traceable'
  },
  {
    id: 'sensors',
    name: 'Sensors & Transducers',
    desc: 'MEMS IMU, Temperature & Humidity, Current Sensors, Pressure, Ultrasonic.',
    count: '140,000+ Items',
    icon: 'Radio',
    badge: 'Hot Deals'
  }
];

export const qualityCertifications = [
  {
    title: 'ISO 9001:2015',
    desc: 'Certified Quality Management System ensuring consistent high standards across all sourcing operations.'
  },
  {
    title: 'AS9120B Standard',
    desc: 'Aerospace quality requirements for distribution of electronic and electrical components.'
  },
  {
    title: 'IDEA-STD-1010-B',
    desc: 'Strict visual inspection standard for counterfeit detection and component verification.'
  },
  {
    title: 'ESD-Protected Facility',
    desc: 'ANSI/ESD S20.20 certified warehouses with climate-controlled, anti-static environments.'
  }
];

export const testingProcedures = [
  {
    step: '01',
    title: 'Incoming Visual Inspection',
    desc: 'High-magnification digital microscope inspection for packaging integrity, pin condition, and marking verification.'
  },
  {
    step: '02',
    title: 'X-Ray & Die Analysis',
    desc: 'Non-destructive real-time X-ray inspection of internal bond wires, die size, and leadframe consistency.'
  },
  {
    step: '03',
    title: 'Decapsulation & Solderability',
    desc: 'Chemical decapsulation to verify manufacturer logo, mask codes, and test pin solder wettability.'
  },
  {
    step: '04',
    title: 'Electrical Functionality Test',
    desc: 'Testing electrical characteristics, operating parameters, and pin voltage thresholds against original datasheets.'
  }
];

export const industrySolutions = [
  {
    title: 'Automotive & EV',
    desc: 'AEC-Q100/Q200 qualified components for battery management systems, autonomous driving, and powertrain control.',
    icon: 'Car'
  },
  {
    title: 'Medical Devices',
    desc: 'Ultra-reliable, traceable components for patient monitors, diagnostic equipment, and surgical tools.',
    icon: 'Activity'
  },
  {
    title: 'Industrial & Robotics',
    desc: 'Ruggedized ICs, motor controllers, and sensor solutions built for 24/7 harsh industrial operations.',
    icon: 'Factory'
  },
  {
    title: 'Telecommunications & 5G',
    desc: 'High-frequency RF ICs, transceivers, and optical modules for cellular base stations and networking.',
    icon: 'Wifi'
  }
];
