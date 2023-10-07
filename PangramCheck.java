import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");

        String input = scanner.nextLine().toLowerCase(); // Convert to lowercase for case insensitivity
        scanner.close();

        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        // Create a set to store unique lowercase alphabets
        Set<Character> alphabetSet = new HashSet<>();

        for (char ch : input.toCharArray()) {
            if (Character.isLetter(ch) && Character.isLowerCase(ch)) {
                alphabetSet.add(ch);
            }
        }
        return alphabetSet.size() == 26;
    }
}
