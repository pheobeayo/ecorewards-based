import { ethers } from "ethers";
import earnAbi from "./earnAbi.json"
import tokenAbi from './tokenAbi.json'
import baseAbi from './baseAbi.json'

export const getGreenTokenContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_GREENTOKEN_ADDRESS,
        tokenAbi,
        providerOrSigner
    );

export const getGreenEarnContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_GREENEARN_ADDRESS,
        earnAbi,
        providerOrSigner
    );

export const getBaseNameContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_BASENAME_CONTRACT,
        baseAbi,
        providerOrSigner
    );