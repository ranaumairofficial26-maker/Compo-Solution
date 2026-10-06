import React, { useState } from 'react';
import { X, CheckCircle, Send, UploadCloud, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RequestQuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    partNumber: '',
    quantity: '',
    targetPrice: '',
    urgency: 'Standard (3-5 days)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Fire celebration confetti
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback silently if confetti library fails
      }
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      partNumber: '',
      quantity: '',
      targetPrice: '',
      urgency: 'Standard (3-5 days)',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="compo-modal-backdrop" onClick={onClose}>
      <div className="compo-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="compo-modal-header">
          <div>
            <span className="compo-modal-tag">FAST RFQ RESPONSE WITHIN 2 HOURS</span>
            <h3 className="compo-modal-title">Request a Component Quote</h3>
          </div>
          <button className="compo-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="compo-modal-success">
            <div className="compo-success-icon-wrapper">
              <CheckCircle size={56} className="text-emerald-500" />
            </div>
            <h4>Quote Request Received!</h4>
            <p>
              Thank you, <strong>{formData.name || 'Valued Partner'}</strong>. Our global procurement team has received your RFQ for <strong>{formData.partNumber || 'your components'}</strong> and will respond to <strong>{formData.email}</strong> with competitive pricing within 2 business hours.
            </p>
            <div className="compo-quote-ref">
              Reference ID: <strong>RFQ-{Math.floor(100000 + Math.random() * 900000)}</strong>
            </div>
            <button className="compo-btn compo-btn-primary" onClick={handleReset}>
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="compo-modal-form">
            <div className="compo-form-grid">
              
              <div className="compo-form-group">
                <label>Contact Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="compo-form-group">
                <label>Business Email *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="procurement@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="compo-form-group">
                <label>Company Name</label>
                <input 
                  type="text" 
                  placeholder="Tech Solutions Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div className="compo-form-group">
                <label>Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="compo-form-group compo-col-span-2">
                <label>Part Number(s) & Manufacturer *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. STM32F407VGT6 (STMicroelectronics) or ESP32-WROOM-32"
                  value={formData.partNumber}
                  onChange={(e) => setFormData({...formData, partNumber: e.target.value})}
                />
              </div>

              <div className="compo-form-group">
                <label>Required Quantity (PCS) *</label>
                <input 
                  type="number" 
                  required 
                  min="1"
                  placeholder="e.g. 5000"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                />
              </div>

              <div className="compo-form-group">
                <label>Target Price / Unit ($ USD)</label>
                <input 
                  type="text" 
                  placeholder="e.g. $4.50 (Optional)"
                  value={formData.targetPrice}
                  onChange={(e) => setFormData({...formData, targetPrice: e.target.value})}
                />
              </div>

              <div className="compo-form-group compo-col-span-2">
                <label>Delivery Urgency</label>
                <select 
                  value={formData.urgency}
                  onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                >
                  <option value="Urgent (24-48 Hours)">🔥 Urgent Shortage (24-48 Hours Dispatch)</option>
                  <option value="Standard (3-5 days)">⚡ Standard Sourcing (3-5 Days)</option>
                  <option value="Scheduled / Buffer Stock">📦 Scheduled Delivery / Buffer Stock Plan</option>
                </select>
              </div>

              <div className="compo-form-group compo-col-span-2">
                <label>Additional Notes / BOM Upload details</label>
                <textarea 
                  rows="3" 
                  placeholder="Specify packaging (Tape & Reel, Tray, Tube), date codes, or attach special testing requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>

            </div>

            {/* Modal Actions */}
            <div className="compo-modal-footer">
              <div className="compo-modal-guarantee">
                <AlertCircle size={15} />
                <span>100% Original Authentic & Traceable Guarantee</span>
              </div>
              <div className="compo-modal-btn-group">
                <button type="button" className="compo-btn compo-btn-outline" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="compo-btn compo-btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Send Request Now'}
                  {!isSubmitting && <Send size={15} />}
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
