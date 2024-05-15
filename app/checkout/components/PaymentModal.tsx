"use client";
import React, { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  open,
  onClose,
  onSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!stripe || !elements) {
      console.error("Stripe or Elements not yet loaded");
      setIsLoading(false);
      return;
    }

    try {
      const { error: confirmationError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Removed return_url to avoid redirection
        },
        redirect: "if_required",
      });

      if (confirmationError) {
        console.error("Payment confirmation error:", confirmationError);
      } else {
        console.log("Payment confirmed successfully!");
        toast.success("Payment successful!");
        onSuccess();
        onClose();
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setError("Error processing payment.");
    } finally {
      setIsLoading(false);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="payment-modal-title"
      aria-describedby="payment-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="payment-modal-title"
          variant="h6"
          component="h2"
          className="text-[#3A3845] pb-2 font-semibold"
        >
          Payment
        </Typography>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <PaymentElement className="custom-payment-element" />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            fullWidth
            disabled={isLoading}
            className="font-semibold text-[#3A3845]"
          >
            {isLoading ? "Processing..." : "Order Now"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
