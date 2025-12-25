// Paddle.js utilities using the official CDN approach

interface PaddlePriceIds {
  trial: string;
  basic: string;
  personal: string;
  team: string;
}

export const PRICE_IDS: PaddlePriceIds = {
  trial: import.meta.env.VITE_PADDLE_PRICE_TRIAL,
  basic: import.meta.env.VITE_PADDLE_PRICE_BASIC,
  personal: import.meta.env.VITE_PADDLE_PRICE_PERSONAL,
  team: import.meta.env.VITE_PADDLE_PRICE_TEAM,
};

// Validate Paddle configuration
export const validatePaddleConfig = () => {
  console.log('=== PADDLE CONFIGURATION ===');
  console.log('Environment:', import.meta.env.VITE_PADDLE_ENVIRONMENT);
  console.log('Seller ID:', import.meta.env.VITE_PADDLE_SELLER_ID);
  console.log('Client Token:', import.meta.env.VITE_PADDLE_CLIENT_TOKEN ? 'Set (length: ' + import.meta.env.VITE_PADDLE_CLIENT_TOKEN.length + ')' : 'NOT SET');
  console.log('Price IDs:');
  console.log('  Trial:', PRICE_IDS.trial);
  console.log('  Basic:', PRICE_IDS.basic);
  console.log('  Personal:', PRICE_IDS.personal);
  console.log('  Team:', PRICE_IDS.team);

  const issues = [];
  if (!import.meta.env.VITE_PADDLE_CLIENT_TOKEN) issues.push('Client token not set');
  if (!PRICE_IDS.trial?.startsWith('pri_')) issues.push('Trial price ID invalid');
  if (!PRICE_IDS.basic?.startsWith('pri_')) issues.push('Basic price ID invalid');
  if (!PRICE_IDS.personal?.startsWith('pri_')) issues.push('Personal price ID invalid');
  if (!PRICE_IDS.team?.startsWith('pri_')) issues.push('Team price ID invalid');

  if (issues.length > 0) {
    console.error('Configuration issues found:', issues);
  } else {
    console.log('Configuration looks valid');
  }
  console.log('============================');

  return issues.length === 0;
};

// Initialize Paddle using the official CDN approach
export const initializePaddleInstance = async (
  token: string,
  environment: 'sandbox' | 'production',
  onCheckoutComplete?: (data: any) => void
) => {
  try {
    console.log('Initializing Paddle with CDN approach...');

    // Check if Paddle is loaded
    if (!(window as any).Paddle) {
      console.error('Paddle.js not loaded. Check if CDN script is working.');
      return null;
    }

    // Set environment first
    if (environment === 'sandbox') {
      console.log('Setting Paddle environment to sandbox...');
      (window as any).Paddle.Environment.set('sandbox');
      console.log('Environment set to sandbox');
    } else {
      console.log('Using production environment');
    }

    // Initialize with client-side token
    console.log('Calling Paddle.Initialize...');
    (window as any).Paddle.Initialize({
      token: token,
      eventCallback: (data: any) => {
        console.log('Paddle event:', data);

        // Handle checkout completion
        if (data.name === 'checkout.completed') {
          console.log('Checkout completed:', data.data);
          // Call the callback if provided, otherwise redirect
          if (onCheckoutComplete) {
            onCheckoutComplete(data.data);
          } else {
            window.location.href = '/purchase/success';
          }
        }

        // Handle checkout close
        if (data.name === 'checkout.closed') {
          console.log('Checkout closed:', data.data);
        }

        // Handle checkout errors
        if (data.name === 'checkout.error') {
          console.error('Checkout error:', data);
          const errorDetail = data.detail || data.data?.error?.detail || 'Unknown error';
          const errorCode = data.code || data.data?.error?.code || '';
          console.error('Error detail:', errorDetail);
          console.error('Error code:', errorCode);

          // Show user-friendly error message
          let userMessage = 'Checkout error: ';
          if (errorDetail === 'transaction_default_checkout_url_not_set') {
            userMessage += 'Checkout URL not configured. This has been fixed - please try again.';
          } else {
            userMessage += errorDetail;
          }
          alert(userMessage);
        }

        // Handle checkout loaded
        if (data.name === 'checkout.loaded') {
          console.log('Checkout loaded successfully');
        }

        // Handle checkout customer created
        if (data.name === 'checkout.customer.created') {
          console.log('Customer created:', data.data);
        }
      },
    });

    // Return the Paddle global object itself
    const paddle = (window as any).Paddle;
    console.log('Paddle initialized successfully:', paddle);

    // Check if the paddle object has the expected properties
    if (paddle && paddle.Checkout && paddle.Checkout.open) {
      console.log('Paddle.Checkout.open is available');
    } else {
      console.error('Paddle.Checkout.open is not available');
    }

    return paddle;
  } catch (error) {
    console.error('Error initializing Paddle:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
      });
    }
    return null;
  }
};

// Open checkout with Paddle.js using the official approach
export const openCheckout = async (
  paddle: any,
  priceId: string,
  quantity: number = 1,
  customerEmail?: string
) => {
  if (!paddle) {
    console.error('Paddle not initialized');
    alert('Payment system is loading. Please wait a moment and try again.');
    return;
  }

  // Check if price ID is valid
  if (!priceId || priceId.includes('here') || !priceId.startsWith('pri_')) {
    console.error('Invalid price ID:', priceId);
    alert('Payment is not configured yet. Please use the trial version for now.');
    return;
  }

  try {
    console.log('=== PADDLE CHECKOUT DEBUG ===');
    console.log('Price ID:', priceId);
    console.log('Quantity:', quantity);
    console.log('Customer Email:', customerEmail);
    console.log('Paddle instance available:', !!paddle);
    console.log('Paddle.Checkout available:', !!paddle?.Checkout);
    console.log('Paddle.Checkout.open available:', typeof paddle?.Checkout?.open);

    // Get current URL for checkout settings
    const currentUrl = window.location.origin;

    // Complete checkout configuration with required URLs
    const checkoutOptions: any = {
      items: [
        {
          priceId: priceId,
          quantity: quantity,
        }
      ],
      settings: {
        displayMode: 'overlay',
        theme: 'light',
        locale: 'en',
        successUrl: `${currentUrl}/purchase/success`,
        // Optional: add close URL to handle when user closes checkout
      },
      customData: {
        // You can add custom data here if needed
      }
    };

    // Only add customer if email is provided
    if (customerEmail) {
      checkoutOptions.customer = {
        email: customerEmail
      };
    }

    console.log('Checkout options being sent:', JSON.stringify(checkoutOptions, null, 2));
    console.log('============================');

    // Open checkout using the official approach
    const result = await paddle.Checkout.open(checkoutOptions);

    console.log('Checkout open result:', result);
    console.log('Checkout opened successfully');
  } catch (error) {
    console.error('=== CHECKOUT ERROR ===');
    console.error('Full error object:', error);
    console.error('Error type:', typeof error);
    console.error('Error constructor:', error?.constructor?.name);

    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }

    // Try to extract any additional error details
    if (typeof error === 'object' && error !== null) {
      console.error('Error keys:', Object.keys(error));
      console.error('Error as JSON:', JSON.stringify(error, null, 2));
    }
    console.error('===================');

    // More specific error handling
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes('400')) {
      alert('Invalid product configuration. Please verify:\n1. Price IDs exist in your Paddle sandbox\n2. Products are set to "Ready to sell"\n3. Price IDs match your Paddle account\n\nCheck console for detailed error information.');
    } else {
      alert('Failed to open payment page. Please check the console for details.');
    }
  }
};