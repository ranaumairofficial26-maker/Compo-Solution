/**
 * Enterprise Server Parts & Strategic Sourcing Models (EXCESS & PPV)
 */

export const serverPartsList = [
  {
    id: 'cpu',
    name: 'Enterprise Server Processors (CPU)',
    shortName: 'Server CPU',
    category: 'Compute & Processing',
    image: '/server-parts/cpu.jpg',
    badge: 'Immediate Allocation',
    badgeColor: 'cyan',
    brands: ['Intel® Xeon® Scalable', 'AMD EPYC™ 9004/9654', 'Ampere® Altra®'],
    specs: 'Up to 128 Cores / 256 Threads | LGA4677, SP5 Sockets | DDR5 & PCIe Gen5',
    formFactors: 'Server Tray (OEM & Boxed)',
    stock: '42,000+ Units Ready',
    desc: 'High-availability server microprocessors for cloud hyperscalers, edge nodes, and high-performance compute clusters with full factory traceability.'
  },
  {
    id: 'memory',
    name: 'Server ECC Registered Memory (RDIMM / LRDIMM)',
    shortName: 'Server MEMORY',
    category: 'Enterprise Memory',
    image: '/server-parts/memory.jpg',
    badge: 'Factory Sealed',
    badgeColor: 'emerald',
    brands: ['Samsung', 'Micron', 'SK Hynix'],
    specs: 'DDR5-4800 / 5600 / 6400 MT/s & DDR4-3200 | 16GB, 32GB, 64GB, 128GB, 256GB',
    formFactors: 'ECC Registered RDIMM, LRDIMM, VLP',
    stock: '185,000+ Modules',
    desc: 'Mission-critical server RAM modules featuring on-die ECC and side-band error correction, tested under thermal cycling for zero-defect uptime.'
  },
  {
    id: 'ssd',
    name: 'Enterprise NVMe & SAS/SATA Solid State Drives',
    shortName: 'Enterprise SSD',
    category: 'High-Speed Storage',
    image: '/server-parts/ssd.jpg',
    badge: 'High Endurance (DWPD)',
    badgeColor: 'blue',
    brands: ['Solidigm', 'Kioxia', 'Samsung PM9A3/PM1733', 'Micron 7450/9400'],
    specs: 'PCIe Gen4 / Gen5 x4 NVMe | U.2, U.3, E1.S, E3.S, M.2 | Up to 30.72TB',
    formFactors: '2.5" U.2/U.3, EDSFF E1.S / E3.S',
    stock: '95,000+ Drives Ready',
    desc: 'Power-loss protected (PLP) enterprise solid state storage engineered for 24/7 sustained read/write IOPS in virtualized database clusters.'
  },
  {
    id: 'hdd',
    name: 'High-Capacity Enterprise Datacenter Hard Drives',
    shortName: 'Enterprise HDD',
    category: 'High-Capacity Storage',
    image: '/server-parts/hdd.jpg',
    badge: 'Tier-1 Cloud Grade',
    badgeColor: 'purple',
    brands: ['Seagate Exos® X20/X24', 'WD Ultrastar® DC HC560/570', 'Toshiba MG Series'],
    specs: '16TB, 18TB, 20TB, 22TB, 24TB | Enterprise SAS 12Gb/s & SATA 6Gb/s | 7200 RPM',
    formFactors: '3.5-inch Enterprise Helium-Sealed',
    stock: '120,000+ Drives',
    desc: 'Helium-sealed high-density enterprise hard drives for massive cold storage, CCTV archives, and secondary backup tiers with 2.5M hours MTBF.'
  },
  {
    id: 'gpu',
    name: 'Data Center & AI Compute Accelerators (GPU)',
    shortName: 'AI & Data Center GPU',
    category: 'AI / Deep Learning',
    image: '/server-parts/gpu.jpg',
    badge: 'High-Priority Desk',
    badgeColor: 'amber',
    brands: ['NVIDIA H100 / A100 / L40S / H200', 'AMD Instinct™ MI300X'],
    specs: '80GB - 141GB HBM3/HBM3e Memory | PCIe 5.0 & SXM5 Form Factor | FP8/FP16 Tensor Cores',
    formFactors: 'PCIe Dual-Slot & SXM5 Baseboard',
    stock: 'Dedicated Allocation Desk',
    desc: 'High-priority enterprise GPUs for LLM training, generative AI inference, and scientific modeling with authorized serial verification.'
  },
  {
    id: 'nic',
    name: 'High-Speed Enterprise Network Interface Cards (NIC)',
    shortName: 'Server NIC Cards',
    category: 'High-Speed Networking',
    image: '/server-parts/nic.jpg',
    badge: 'Ultra-Low Latency',
    badgeColor: 'cyan',
    brands: ['NVIDIA Mellanox ConnectX®-5/6/7', 'Broadcom Thor/NetXtreme', 'Intel® E810'],
    specs: 'Dual-Port & Quad-Port 10G, 25G, 40G, 100G, 200G, 400GbE | SFP28, QSFP28, QSFP-DD',
    formFactors: 'PCIe Standup & OCP 3.0 NIC',
    stock: '65,000+ Ports in Stock',
    desc: 'Enterprise optical and copper network adapters with RoCE v2, hardware offloading, and SR-IOV for low-latency financial and cluster interconnects.'
  }
];

export const businessModels = [
  {
    id: 'excess',
    tag: 'SURPLUS ASSET RECOVERY',
    title: 'EXCESS Inventory Management',
    subtitle: 'Transform surplus lots & idle electronic stock into immediate capital liquidity.',
    image: '/business-models/excess-inventory.jpg',
    badge: 'ESD Warehouse Logistics',
    icon: 'PackageCheck',
    color: 'emerald',
    keyStats: [
      { num: 120, prefix: '$', suffix: 'M+', label: 'Recovered Capital' },
      { num: 24, suffix: 'h', label: 'Valuation SLA' },
      { num: 100, suffix: '%', label: 'Channel Privacy' }
    ],
    features: [
      {
        step: '01',
        title: 'Outright Cash Lot Buyout',
        desc: 'Immediate full purchase & freight collection for rapid balance-sheet clearing.'
      },
      {
        step: '02',
        title: 'High-Yield Consignment Model',
        desc: 'Stored in ISO 9001 ESD hubs & marketed to 5,000+ buyers for up to 85% return.'
      },
      {
        step: '03',
        title: 'Real-Time Revenue Sharing',
        desc: 'Live transparent portal tracking with automated monthly profit disbursements.'
      },
      {
        step: '04',
        title: 'Zero Scrap & ESG Compliance',
        desc: 'Responsible lifecycle management compliant with global WEEE standards.'
      }
    ],
    ctaText: 'Submit Excess Inventory List',
    ctaAction: 'excess'
  },
  {
    id: 'ppv',
    tag: 'BOM COST OPTIMIZATION',
    title: 'PPV (Purchase Price Variance) Solutions',
    subtitle: 'Procure production BOM components 15%–35% below contract prices.',
    image: '/business-models/ppv-sourcing.jpg',
    badge: 'Trading & Arbitrage Desk',
    icon: 'TrendingDown',
    color: 'cyan',
    keyStats: [
      { num: 28, suffix: '%', label: 'Average BOM Savings' },
      { num: 50000, suffix: '+', label: 'Tracked Active Parts' },
      { num: 100, suffix: '%', label: 'Factory CoC Traceable' },
    ],
    features: [
      {
        step: '01',
        title: 'Spot-Market Arbitrage Sourcing',
        desc: 'Capture regional price variances for active ICs 15% to 35% below book price.'
      },
      {
        step: '02',
        title: 'Tier-1 Factory Lot Allocations',
        desc: 'Direct access to OEM/EMS manufacturing surpluses in sealed original packaging.'
      },
      {
        step: '03',
        title: 'Full In-House QA Guarantee',
        desc: '100% inspected in our testing labs with optical, X-ray & parametric verification.'
      },
      {
        step: '04',
        title: 'Scheduled JIT Deliveries',
        desc: 'Lock in spot pricing with 6 to 12 months scheduled deliveries and price protection.'
      }
    ],
    ctaText: 'Request PPV Cost-Down Analysis',
    ctaAction: 'ppv'
  }
];
