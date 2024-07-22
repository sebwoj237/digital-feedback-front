export interface FormQuestion {
    title: string,
    description: string,
    // Question type rate in scale from 0 to 5
}

export interface Form {
    id: number,
    imageSrc?: string,
    title: string,
    description: string,
    questions: FormQuestion[],
    score: number, // Average rating float between 0 and 5 
    ratings: number // number of people who submitted
}