const formatPhoneNumberFR = (phoneNumber: string) => {
    return phoneNumber.replace(
        /^33(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/,
        "+33 $1 $2 $3 $4 $5",
    );
};

export const formatPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) return "";

    // remove anything that is not a number, for example "+"
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

    if (
        cleanedPhoneNumber.startsWith("33") &&
        cleanedPhoneNumber.length === 11
    ) {
        return formatPhoneNumberFR(cleanedPhoneNumber);
    }

    return phoneNumber;
};
