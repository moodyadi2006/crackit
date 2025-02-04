import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config({
  path: "../.env",
});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = twilio(accountSid, authToken);

const sendSMS = async () => {
  try {
    client.verify.v2
      .services("VA70e0b0304c1208721447d0cfa6305875")
      .verifications.create({ to: "+919540492006", channel: "sms" })
      .then((verification) => {
        console.log(verification.sid);
        return verification.sid;
      });
  } catch (error) {
    console.log(error);
  }
};

export { sendSMS };
