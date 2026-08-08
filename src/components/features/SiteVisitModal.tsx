"use client";

import React, { useState, useCallback } from "react";
import { Modal } from "@/components/common/Modal";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeSiteVisitModal } from "@/store/modalSlice";

// 💡 Change your WhatsApp phone number here for testing (Include country code without '+' sign, e.g. "919338379494")
export const WHATSAPP_NUMBER = "919338379494";

export const SiteVisitModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isSiteVisitOpen, selectedPlotTitle } = useAppSelector(
    (state) => state.modal,
  );

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "Morning (10 AM - 1 PM)",
    message: "",
  });

  const handleClose = useCallback(() => {
    dispatch(closeSiteVisitModal());
  }, [dispatch]);

  const handleInstantWhatsApp = () => {
    const instantText = `Hello Meadowlark Realcon, I am interested in ${selectedPlotTitle ? `"${selectedPlotTitle}"` : "your plots and duplex projects in Bhubaneswar"} and would like to receive complete project information, brochure, and details.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(instantText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    handleClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Meadowlark Realcon,\n\nI am reaching out for an Information Inquiry regarding: *${selectedPlotTitle || "Meadowlark Property Inventory"}*.\n\n*Contact Details:*\n• Name: ${formData.fullName}\n• Phone: ${formData.phone}${formData.email ? `\n• Email: ${formData.email}` : ""}${formData.preferredDate ? `\n• Preferred Callback Date: ${formData.preferredDate}` : ""}\n• Time Slot: ${formData.preferredTime}${formData.message ? `\n• Query / Notes: ${formData.message}` : ""}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    handleClose();
  };

  return (
    <Modal
      isOpen={isSiteVisitOpen}
      onClose={handleClose}
      title={
        selectedPlotTitle
          ? `Property Inquiry: ${selectedPlotTitle}`
          : "Contact & Information Inquiry"
      }
    >
      <div className="space-y-5">
        {/* Quick Instant WhatsApp CTA Banner */}
        <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💬</span>
            <div>
              <h5 className="text-xs font-bold text-emerald-900 dark:text-emerald-200 uppercase tracking-wider">
                Instant Information Consultation
              </h5>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 font-light">
                Connect directly with our senior relationship manager
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleInstantWhatsApp}
            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            WhatsApp Now
            <span className="material-symbols-outlined text-[16px]">
              open_in_new
            </span>
          </button>
        </div>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-border-light"></div>
          <span className="shrink px-3 text-[10px] uppercase font-bold text-text-muted tracking-widest">
            Or Provide Contact Info Below
          </span>
          <div className="flex-grow border-t border-border-light"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Full Name"
              placeholder="e.g. Rajesh Mohanty"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="+91 98765 43210"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Email Address"
              type="email"
              placeholder="name@domain.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <div className="flex flex-col space-y-1.5">
              <label className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                Preferred Callback Slot
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) =>
                  setFormData({ ...formData, preferredTime: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-surface border border-border-light rounded-lg text-primary text-xs font-medium focus:outline-none focus:border-secondary [&>option]:bg-card-bg [&>option]:text-primary"
              >
                <option>Morning (10 AM - 1 PM)</option>
                <option>Afternoon (1 PM - 4 PM)</option>
                <option>Evening (4 PM - 7 PM)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col space-y-1.5 pt-0.5">
            <label className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
              Property Requirement / Query
            </label>
            <textarea
              rows={2}
              placeholder="Ask any questions regarding plots, duplex layout, pricing, or brochure request..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-3.5 py-2 bg-surface border border-border-light rounded-lg text-primary text-xs font-medium focus:outline-none focus:border-secondary"
            />
          </div>

          <div className="pt-1">
            <Button variant="secondary" size="md" fullWidth type="submit">
              Send Inquiry via WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
