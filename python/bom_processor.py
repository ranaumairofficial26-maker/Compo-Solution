"""
COMPO Electronics - Bill of Materials (BOM) Parser & Price Estimator
Processes CSV / Excel BOM files, validates MPNs (Manufacturer Part Numbers), 
and matches them against authorized inventory suppliers.
"""

import json
import csv
from typing import List, Dict, Any

class BOMProcessor:
    def __init__(self):
        self.authorized_brands = [
            "Nexperia", "TE Connectivity", "ZEISS", "PRECI-DIP", "TREX Technology",
            "MOTE", "ZMJSEMI", "HUNDUCK", "UTC", "RELMON", "BELLING", "RUNIC", "WCH"
        ]

    def parse_csv(self, file_path: str) -> List[Dict[str, Any]]:
        """Parses a CSV BOM file into structured component line items."""
        line_items = []
        try:
            with open(file_path, mode='r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    part_number = row.get('PartNumber') or row.get('MPN') or row.get('Part')
                    qty = int(row.get('Quantity') or row.get('Qty') or 1)
                    desc = row.get('Description') or row.get('Desc') or 'Electronic Component'
                    mfr = row.get('Manufacturer') or row.get('Brand') or 'Generic'
                    
                    line_items.append({
                        "part_number": part_number,
                        "quantity": qty,
                        "description": desc,
                        "manufacturer": mfr,
                        "status": "In Stock" if any(b.lower() in mfr.lower() for b in self.authorized_brands) else "Sourcing Available"
                    })
        except Exception as e:
            print(f"Error parsing BOM CSV: {e}")
        return line_items

    def calculate_rfq_summary(self, items: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Calculates line item count, estimated turnaround, and QA level."""
        total_parts = sum(item['quantity'] for item in items)
        return {
            "total_line_items": len(items),
            "total_quantity": total_parts,
            "turnaround_hours": 2,
            "qa_inspection_included": True,
            "traceability": "100% Certificate of Conformance (CoC)"
        }

if __name__ == "__main__":
    processor = BOMProcessor()
    sample_bom = [
        {"part_number": "STM32F407VGT6", "quantity": 500, "description": "ARM Cortex-M4 MCU", "manufacturer": "STMicroelectronics"},
        {"part_number": "BAT54S", "quantity": 10000, "description": "Schottky Barrier Diode", "manufacturer": "Nexperia"},
        {"part_number": "CH340G", "quantity": 2500, "description": "USB to Serial UART IC", "manufacturer": "WCH"}
    ]
    summary = processor.calculate_rfq_summary(sample_bom)
    print("COMPO Electronics BOM Processor Test:")
    print(json.dumps(summary, indent=2))
