/**
 * SecureToken Decoder Engine
 *
 * Calculates the number of possible interpretations
 * for an encoded numeric token.
 *
 * Mapping:
 * 1 -> A
 * 2 -> B
 * ...
 * 26 -> Z
 */

function countTokenInterpretations(encodedToken) {
    const tokenLength = encodedToken.length;

    // Empty token has one valid interpretation
    const decodingWays = new Array(tokenLength + 1).fill(0);

    decodingWays[0] = 1;

    // Token starting with zero cannot be decoded
    decodingWays[1] = encodedToken[0] === "0" ? 0 : 1;

    for (let index = 2; index <= tokenLength; index++) {

        // Check if the current single digit is valid
        const currentDigit = Number(encodedToken[index - 1]);

        if (currentDigit >= 1 && currentDigit <= 9) {
            decodingWays[index] += decodingWays[index - 1];
        }


        // Check if the current two-digit sequence is valid
        const twoDigitToken = Number(
            encodedToken.substring(index - 2, index)
        );

        if (twoDigitToken >= 10 && twoDigitToken <= 26) {
            decodingWays[index] += decodingWays[index - 2];
        }
    }

    return decodingWays[tokenLength];
}


// Example usage

const securityToken = "226";

const possibleInterpretations =
    countTokenInterpretations(securityToken);

console.log(
    `Possible interpretations: ${possibleInterpretations}`
);
