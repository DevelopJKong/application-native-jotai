import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);
const content = {}; // anything JSON serializable
const storedAtom = atomWithStorage("stored-key", content, storage);
