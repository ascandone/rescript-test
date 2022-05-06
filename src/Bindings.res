// Importing
@genType.import("./native")
external sum: (float, float) => float = "sum"

// Exporting

@genType
let incrementOne = sum(1.0)
