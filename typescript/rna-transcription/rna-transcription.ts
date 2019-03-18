const dnaNucleotides: string[] = [
    'A',
    'C',
    'G',
    'T',
]

const dnaToRna: { [key: string]: string } = {
    A: 'U',
    C: 'G',
    G: 'C',
    T: 'A',
}

class Transcriptor {
    public toRna(nucleotidesSet: string): string {
        const nucleotides: string[] = nucleotidesSet.split('')

        if (nucleotides.some((nucleotide) => !dnaNucleotides.includes(nucleotide))) {
            throw new Error('Invalid input DNA.')
        }

        return nucleotides.map((nucleotide) => dnaToRna[nucleotide]).join('')
    }
}

export default Transcriptor