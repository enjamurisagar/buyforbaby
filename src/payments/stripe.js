import Stripe from "stripe";

const stripe = new Stripe(process.env.REACT_APP_PUBLIC_STRIPE_SECRET_KEY);
