const { Signer } = require('@neynar/nodejs-sdk');

const client = new Signer(process.env.NEYNAR_API_KEY);

const createProfile = async () => {
  try {
    const result = await client.createProfile({
      signerUUID: process.env.SIGNER_UUID,
      publicKey: process.env.PUBLIC_KEY
    });
    console.log('Profile created successfully:', result);
  } catch (error) {
    console.error('Error creating profile:', error);
  }
};

// اجرا کردن تابع
createProfile();
