// Définition des palettes prédéfinies
const PREDEFINED_PALETTES = {
    DELECTABLE: [
        [34, 49, 30, 49, 233, 243],
        [34, 49, 30, 49, 245, 255],
        [55, 67, 20, 34, 1, 7],
        [55, 67, 20, 34, 12, 26],
        [55, 67, 20, 34, 211, 232],
        [55, 67, 20, 34, 233, 243],
        [69, 85, 32, 68, 12, 26],
        [69, 85, 32, 68, 27, 34],
        [69, 85, 32, 68, 47, 60],
        [69, 85, 32, 68, 233, 243],
        [92, 97, 15, 39, 1, 7],
        [92, 97, 15, 39, 233, 243]
    ],
    CASUAL: [
        [24, 41, 44, 101, 0, 7],
        [24, 41, 44, 101, 12, 26],
        [24, 41, 44, 101, 27, 34],
        [24, 41, 44, 101, 137, 156],
        [36, 44, 17, 35, 0, 7],
        [36, 44, 17, 35, 137, 156],
        [51, 63, 18, 45, 0, 7],
        [51, 63, 18, 45, 12, 26],
        [54, 76, 56, 76, 27, 34],
        [88, 95, 13, 51, 27, 34]
    ],
    BOTANICAL: [
        [14, 26, 46, 92, 47, 60],
        [14, 26, 46, 92, 8, 11],
        [14, 26, 46, 92, 111, 136],
        [29, 42, 65, 96, 35, 46],
        [29, 42, 65, 96, 61, 100],
        [29, 42, 65, 96, 111, 136],
        [23, 46, 23, 57, 35, 46],
        [23, 46, 23, 57, 47, 60],
        [23, 46, 23, 57, 61, 100],
        [58, 69, 3, 50, 47, 60],
        [58, 69, 3, 50, 61, 100]
    ],
    DELICATE: [
        [78, 94, 4, 37, 244, 255],
        [78, 94, 4, 37, 35, 46],
        [78, 94, 4, 37, 61, 100],
        [78, 94, 4, 37, 111, 136],
        [78, 94, 4, 37, 183, 193],
        [78, 94, 4, 37, 194, 210],
        [88, 98, 40, 75, 0, 7],
        [88, 98, 40, 75, 12, 26],
        [88, 98, 40, 75, 27, 34],
        [88, 98, 40, 75, 61, 100]
    ],
    VENERABLE: [
        [21, 34, 9, 60, 8, 11],
        [21, 34, 9, 60, 47, 60],
        [21, 34, 9, 60, 111, 136],
        [21, 34, 9, 60, 137, 156],
        [21, 34, 9, 60, 194, 210],
        [42, 43, 66, 88, 27, 34],
        [42, 49, 25, 47, 0, 7],
        [42, 49, 25, 47, 8, 11],
        [56, 66, 4, 33, 137, 156],
        [56, 66, 4, 33, 157, 182]
    ],
    EARTHY: [
        [23, 26, 54, 90, 8, 11],
        [23, 26, 54, 90, 211, 232],
        [39, 48, 67, 96, 12, 26],
        [39, 48, 67, 96, 27, 34],
        [39, 48, 67, 96, 35, 46],
        [39, 48, 67, 96, 111, 136],
        [31, 51, 23, 58, 0, 7],
        [31, 51, 23, 58, 8, 11],
        [31, 51, 23, 58, 12, 26],
        [31, 51, 23, 58, 12, 26],
        [31, 51, 23, 58, 27, 34],
        [31, 51, 23, 58, 35, 46],
        [31, 51, 23, 58, 47, 60],
        [55, 64, 62, 93, 27, 34],
        [55, 64, 62, 93, 35, 46]
    ],

    NATURAL: [
        [33, 46, 20, 47, 8, 11],
        [33, 46, 20, 47, 12, 26],
        [33, 46, 20, 47, 12, 26],
        [33, 46, 20, 47, 47, 60],
        [49, 62, 5, 27, 12, 26],
        [49, 62, 5, 27, 27, 34],
        [49, 62, 5, 27, 101, 110],
        [68, 77, 19, 42, 0, 7],
        [68, 77, 19, 42, 12, 26],
        [68, 77, 19, 42, 35, 46],
        [78, 94, 0, 77, 0, 7],
        [78, 94, 0, 77, 12, 26],
        [78, 94, 0, 77, 12, 26],
        [78, 94, 0, 77, 27, 34],
        [78, 94, 0, 77, 111, 136],
        [78, 94, 0, 77, 137, 156]
    ],

    PIQUANT: [
        [37, 52, 65, 83, 244, 255],
        [37, 52, 65, 83, 12, 26],
        [37, 52, 65, 83, 27, 34],
        [37, 52, 65, 83, 35, 46],
        [37, 52, 65, 83, 47, 60],
        [37, 52, 65, 83, 211, 232],
        [37, 52, 65, 83, 233, 243],
        [38, 53, 26, 57, 8, 11],
        [38, 53, 26, 57, 12, 26],
        [38, 53, 26, 57, 233, 243],
        [55, 67, 74, 93, 8, 11],
        [55, 67, 74, 93, 12, 26],
        [55, 67, 74, 93, 27, 34],
        [55, 67, 74, 93, 35, 46],
        [58, 63, 46, 52, 0, 7],
        [58, 63, 46, 52, 47, 60]
    ],

    URBAN: [
        [22, 49, 1, 61, 12, 26],
        [22, 49, 1, 61, 27, 34],
        [22, 49, 1, 61, 137, 156],
        [22, 49, 1, 61, 137, 156],
        [22, 49, 1, 61, 137, 156],
        [22, 49, 1, 61, 157, 182],
        [22, 49, 1, 61, 157, 182],
        [22, 49, 1, 61, 183, 193],
        [22, 49, 1, 61, 233, 243],
        [55, 77, 2, 31, 8, 11],
        [55, 77, 2, 31, 12, 26],
        [55, 77, 2, 31, 111, 136],
        [55, 77, 2, 31, 137, 156],
        [55, 77, 2, 31, 137, 156],
        [55, 77, 2, 31, 137, 156],
        [55, 77, 2, 31, 157, 182],
        [55, 77, 2, 31, 183, 193]
    ],

    NURTURING: [
        [43, 57, 3, 20, 244, 25],
        [43, 57, 3, 20, 137, 156],
        [60, 79, 5, 56, 0, 7],
        [60, 79, 5, 56, 8, 11],
        [60, 79, 5, 56, 12, 26],
        [60, 79, 5, 56, 12, 26],
        [60, 79, 5, 56, 111, 136],
        [76, 96, 10, 60, 8, 11],
        [76, 96, 10, 60, 12, 26],
        [76, 96, 10, 60, 12, 26],
        [76, 96, 10, 60, 27, 34],
        [76, 96, 10, 60, 47, 60],
        [76, 96, 10, 60, 111, 136],
        [76, 96, 10, 60, 137, 156]
    ],

    TROPICAL: [
        [30, 42, 41, 96, 111, 136],
        [30, 42, 41, 96, 137, 156],
        [30, 42, 41, 96, 137, 156],
        [30, 42, 41, 96, 137, 156],
        [48, 67, 39, 61, 47, 60],
        [48, 67, 39, 61, 111, 136],
        [48, 67, 39, 61, 194, 210],
        [48, 67, 39, 61, 194, 210],
        [55, 69, 71, 93, 244, 255],
        [55, 69, 71, 93, 8, 11],
        [55, 69, 71, 93, 12, 26],
        [55, 69, 71, 93, 35, 46]
    ],

    SUBTLE: [
        [28, 45, 3, 17, 12, 26],
        [28, 45, 3, 17, 27, 34],
        [28, 45, 3, 17, 137, 156],
        [28, 45, 3, 17, 157, 182],
        [28, 45, 3, 17, 211, 232],
        [28, 45, 3, 17, 233, 243],
        [47, 65, 3, 30, 0, 7],
        [47, 65, 3, 30, 27, 34],
        [47, 65, 3, 30, 137, 156],
        [47, 65, 3, 30, 137, 156],
        [47, 65, 3, 30, 183, 193],
        [47, 65, 3, 30, 211, 232],
        [47, 65, 3, 30, 233, 243],
        [69, 88, 1, 24, 12, 26],
        [69, 88, 1, 24, 27, 34],
        [69, 88, 1, 24, 35, 46],
        [69, 88, 1, 24, 137, 156],
        [69, 88, 1, 24, 157, 182],
        [69, 88, 1, 24, 183, 193],
        [69, 88, 1, 24, 233, 243]
    ],

    RICH: [
        [18, 45, 77, 97, 244, 255],
        [18, 45, 77, 97, 12, 26],
        [18, 45, 77, 97, 27, 34],
        [18, 45, 77, 97, 27, 34],
        [18, 45, 77, 97, 211, 232],
        [18, 45, 77, 97, 233, 243],
        [18, 45, 77, 97, 233, 243],
        [21, 47, 32, 59, 244, 255],
        [21, 47, 32, 59, 12, 26],
        [21, 47, 32, 59, 35, 46],
        [21, 47, 32, 59, 183, 193],
        [21, 47, 32, 59, 194, 210],
        [21, 47, 32, 59, 233, 243],
        [55, 73, 18, 62, 12, 26],
        [55, 73, 18, 62, 27, 34],
        [55, 73, 18, 62, 183, 193],
        [55, 73, 18, 62, 211, 232]
    ],

    PLAYFUL:  [
    [24, 40, 69, 96, 101, 110],
    [24, 40, 69, 96, 111, 136],
    [24, 40, 69, 96, 111, 136],
    [33, 55, 31, 51, 12, 26],
    [33, 55, 31, 51, 111, 136],
    [33, 55, 31, 51, 111, 136],
    [33, 55, 31, 51, 137, 156],
    [33, 55, 31, 51, 157, 182],
    [33, 55, 31, 51, 183, 193],
    [33, 55, 31, 51, 183, 193],
    [33, 55, 31, 51, 211, 232],
    [53, 65, 55, 98, 244, 255],
    [53, 65, 55, 98, 12, 26],
    [53, 65, 55, 98, 27, 34],
    [53, 65, 55, 98, 47, 60],
    [53, 65, 55, 98, 35, 46]

    ],

    RELIABLE: [
        [19, 32, 44, 90, 244, 255],
        [19, 32, 44, 90, 137, 156],
        [19, 32, 44, 90, 157, 182],
        [19, 32, 44, 90, 183, 193],
        [19, 32, 44, 90, 211, 232],
        [29, 52, 0, 24, 0, 7],
        [29, 52, 0, 24, 137, 156],
        [29, 52, 0, 24, 157, 182],
        [29, 52, 0, 24, 157, 182],
        [29, 52, 0, 24, 183, 193],
        [29, 52, 0, 24, 211, 232],
        [58, 82, 5, 62, 12, 26],
        [58, 82, 5, 62, 111, 136],
        [58, 82, 5, 62, 137, 156],
        [58, 82, 5, 62, 137, 156],
        [58, 82, 5, 62, 137, 156],
        [58, 82, 5, 62, 211, 232]
    ],

    TRANSCENDANT: [
        [21, 46, 8, 49, 157, 182],
        [21, 46, 8, 49, 157, 182],
        [21, 46, 8, 49, 183, 193],
        [21, 46, 8, 49, 183, 193],
        [21, 46, 8, 49, 194, 210],
        [21, 46, 8, 49, 211, 232],
        [50, 70, 8, 36, 137, 156],
        [50, 70, 8, 36, 157, 182],
        [50, 70, 8, 36, 157, 182],
        [50, 70, 8, 36, 157, 182],
        [50, 70, 8, 36, 194, 210],
        [50, 70, 8, 36, 211, 232],
        [73, 98, 0, 48, 0, 7],
        [73, 98, 0, 48, 137, 156],
        [73, 98, 0, 48, 157, 182],
        [73, 98, 0, 48, 194, 210],
        [73, 98, 0, 48, 211, 232],
        [73, 98, 0, 48, 211, 232]
    ],

    POWERFUL: [
        [12, 28, 12, 93, 12, 26],
        [12, 28, 12, 93, 27, 34],
        [12, 28, 12, 93, 35, 46],
        [12, 28, 12, 93, 61, 100],
        [12, 28, 12, 93, 111, 136],
        [12, 28, 12, 93, 137, 156],
        [12, 28, 12, 93, 211, 232],
        [31, 43, 46, 92, 0, 7],
        [31, 43, 46, 92, 137, 156],
        [31, 43, 46, 92, 157, 182],
        [45, 62, 5, 93, 31, 0, 7],
        [45, 62, 5, 93, 31, 27, 34],
        [45, 62, 5, 93, 31, 35, 46],
        [45, 62, 5, 93, 31, 111, 136]
    ],

    ROMANTIC: [
        [54, 73, 20, 28, 0, 7],
        [54, 73, 20, 28, 137, 156],
        [54, 73, 20, 28, 194, 210],
        [54, 73, 20, 28, 211, 232],
        [77, 96, 14, 81, 244, 255],
        [77, 96, 14, 81, 12, 26],
        [77, 96, 14, 81, 12, 26],
        [77, 96, 14, 81, 35, 46],
        [77, 96, 14, 81, 47, 60],
        [77, 96, 14, 81, 137, 156],
        [77, 96, 14, 81, 137, 156],
        [77, 96, 14, 81, 233, 243]
    ],

    PROVOCATIVE: [
        [0, 1, 0, 1, 0, 7],
        [31, 41, 45, 63, 137, 156],
        [31, 41, 45, 63, 211, 232],
        [31, 41, 45, 63, 211, 232],
        [42, 51, 20, 42, 0, 7],
        [42, 51, 20, 42, 157, 182],
        [42, 51, 20, 42, 157, 182],
        [42, 51, 20, 42, 194, 210],
        [42, 51, 20, 42, 211, 232],
        [49, 60, 53, 82, 0, 7],
        [49, 60, 53, 82, 12, 26],
        [49, 60, 53, 82, 27, 34],
        [49, 60, 53, 82, 233, 243]
    ],

    NOSTALGIC: [
        [50, 73, 9, 32, 244, 255],
        [50, 73, 9, 32, 137, 156],
        [50, 73, 9, 32, 157, 182],
        [50, 73, 9, 32, 211, 232],
        [50, 73, 9, 32, 211, 232],
        [50, 73, 9, 32, 233, 243],
        [70, 94, 9, 63, 244, 255],
        [70, 94, 9, 63, 244, 255],
        [70, 94, 9, 63, 12, 26],
        [70, 94, 9, 63, 35, 46],
        [70, 94, 9, 63, 61, 100],
        [70, 94, 9, 63, 61, 100],
        [70, 94, 9, 63, 211, 232],
        [70, 94, 9, 63, 233, 243]
    ],

    ROBUST: [
        [15, 40, 65, 95, 12, 26],
        [15, 40, 65, 95, 27, 34],
        [15, 40, 65, 95, 35, 46],
        [15, 40, 65, 95, 35, 46],
        [15, 40, 65, 95, 61, 100],
        [15, 40, 65, 95, 211, 232],
        [15, 40, 65, 95, 233, 243],
        [28, 67, 23, 50, 244, 255],
        [28, 67, 23, 50, 8, 11],
        [28, 67, 23, 50, 12, 26],
        [28, 67, 23, 50, 35, 46],
        [28, 67, 23, 50, 61, 100],
        [28, 67, 23, 50, 61, 100],
        [28, 67, 23, 50, 183, 193],
        [28, 67, 23, 50, 194, 210],
        [28, 67, 23, 50, 211, 232],
        [28, 67, 23, 50, 211, 232],
        [28, 67, 23, 50, 233, 243],
        [28, 67, 23, 50, 233, 243]
    ],

    SOOTHING: [
        [56, 73, 8, 57, 111, 136],
        [56, 73, 8, 57, 137, 156],
        [56, 73, 8, 57, 137, 156],
        [56, 73, 8, 57, 183, 193],
        [56, 73, 8, 57, 194, 210],
        [56, 73, 8, 57, 233, 243],
        [75, 95, 4, 61, 0, 7],
        [75, 95, 4, 61, 35, 46],
        [75, 95, 4, 61, 47, 60],
        [75, 95, 4, 61, 111, 136],
        [75, 95, 4, 61, 111, 136],
        [75, 95, 4, 61, 137, 156],
        [75, 95, 4, 61, 157, 182]
    ],

    MAQUILLE: [
        [24, 48, 26, 66, 0, 7],
        [24, 48, 26, 66, 244, 255],
        [24, 48, 26, 66, 8, 11],
        [24, 48, 26, 66, 12, 26],
        [24, 48, 26, 66, 211, 232],
        [24, 48, 26, 66, 233, 243],
        [51, 70, 22, 51, 0, 7],
        [51, 70, 22, 51, 244, 255],
        [51, 70, 22, 51, 8, 11],
        [71, 91, 18, 54, 0, 7],
        [71, 91, 18, 54, 244, 255],
        [71, 91, 18, 54, 8, 11],
        [71, 91, 18, 54, 12, 26],
        [71, 91, 18, 54, 211, 232],
        [71, 91, 18, 54, 233, 243]
    ],

    TRIBAL: [
        [3, 21, 12, 13, 244, 255],
        [3, 21, 12, 13, 35, 46],
        [28, 47, 31, 69, 0, 7],
        [28, 47, 31, 69, 12, 26],
        [28, 47, 31, 69, 27, 34],
        [28, 47, 31, 69, 35, 46],
        [28, 47, 31, 69, 194, 210],
        [28, 47, 31, 69, 233, 243],
        [25, 56, 75, 101, 0, 7],
        [25, 56, 75, 101, 8, 11],
        [25, 56, 75, 101, 12, 26],
        [25, 56, 75, 101, 211, 232],
        [25, 56, 75, 101, 233, 243],
        [67, 88, 39, 55, 27, 34]
    ],

    TIMELESS: [
        [1, 21, 0, 51, 0, 7],
        [1, 21, 0, 51, 47, 60],
        [1, 21, 0, 51, 137, 156],
        [31, 48, 4, 46, 27, 34],
        [31, 48, 4, 46, 35, 46],
        [31, 48, 4, 46, 157, 182],
        [31, 48, 4, 46, 157, 182],
        [31, 48, 4, 46, 183, 193],
        [31, 48, 4, 46, 194, 210],
        [55, 73, 7, 17, 8, 11],
        [55, 73, 7, 17, 12, 26],
        [55, 73, 7, 17, 27, 34],
        [55, 73, 7, 17, 35, 46],
        [55, 73, 7, 17, 47, 60],
        [80, 96, 2, 53, 27, 34],
        [80, 96, 2, 53, 35, 46],
        [80, 96, 2, 53, 47, 60],
        [80, 96, 2, 53, 61, 100],
        [80, 96, 2, 53, 157, 182]
    ],

    POWER_CLASHING: [
        [19, 36, 18, 60, 244, 255],
        [19, 36, 18, 60, 137, 156],
        [19, 36, 18, 60, 194, 210],
        [19, 36, 18, 60, 211, 232],
        [33, 53, 74, 97, 12, 26],
        [33, 53, 74, 97, 27, 34],
        [33, 53, 74, 97, 137, 156],
        [33, 53, 74, 97, 233, 243],
        [43, 62, 6, 54, 244, 255],
        [43, 62, 6, 54, 35, 46],
        [43, 62, 6, 54, 137, 156],
        [59, 80, 44, 94, 0, 7],
        [59, 80, 44, 94, 12, 26],
        [59, 80, 44, 94, 12, 26],
        [59, 80, 44, 94, 27, 34],
        [59, 80, 44, 94, 35, 46],
        [59, 80, 44, 94, 157, 182],
        [59, 80, 44, 94, 211, 232],
        [75, 93, 15, 32, 35, 46],
        [75, 93, 15, 32, 211, 232]
    ],

    MYSTICAL: [
        [21, 28, 44, 55, 157, 182],
        [36, 46, 52, 96, 211, 232],
        [32, 41, 9, 38, 35, 46],
        [32, 41, 9, 38, 157, 182],
        [32, 41, 9, 38, 211, 232],
        [45, 54, 3, 53, 27, 34],
        [45, 54, 3, 53, 35, 46],
        [45, 54, 3, 53, 47, 60],
        [45, 54, 3, 53, 61, 100],
        [45, 54, 3, 53, 157, 182],
        [45, 54, 3, 53, 157, 182],
        [45, 54, 3, 53, 211, 232],
        [57, 65, 8, 41, 244, 255],
        [57, 65, 8, 41, 8, 11],
        [57, 65, 8, 41, 35, 46],
        [57, 65, 8, 41, 47, 60],
        [57, 65, 8, 41, 61, 100],
        [97, 98, 0, 1, 0, 7]
    ],

    GLAMOROUS: [
        [21, 37, 16, 96, 0, 7],
        [21, 37, 16, 96, 12, 26],
        [21, 37, 16, 96, 137, 156],
        [21, 37, 16, 96, 211, 232],
        [21, 37, 16, 96, 233, 243],
        [42, 53, 15, 53, 0, 7],
        [42, 53, 15, 53, 27, 34],
        [42, 53, 15, 53, 47, 60],
        [42, 53, 15, 53, 111, 136],
        [42, 53, 15, 53, 137, 156],
        [42, 53, 15, 53, 194, 210],
        [42, 53, 15, 53, 211, 232],
        [54, 69, 38, 42, 244, 255],
        [54, 69, 38, 42, 12, 26]
    ],

    SOPHISTICATED: [
        [31, 41, 68, 81, 233, 243],
        [17, 51, 5, 37, 244, 255],
        [17, 51, 5, 37, 137, 156],
        [17, 51, 5, 37, 157, 182],
        [17, 51, 5, 37, 157, 182],
        [17, 51, 5, 37, 183, 193],
        [17, 51, 5, 37, 194, 210],
        [17, 51, 5, 37, 211, 232],
        [17, 51, 5, 37, 211, 232],
        [17, 51, 5, 37, 233, 243],
        [17, 51, 5, 37, 233, 243],
        [57, 83, 5, 25, 244, 255],
        [57, 83, 5, 25, 244, 255],
        [57, 83, 5, 25, 157, 182],
        [57, 83, 5, 25, 157, 182],
        [57, 83, 5, 25, 194, 210],
        [57, 83, 5, 25, 211, 232],
        [57, 83, 5, 25, 233, 243]
    ],

    ACTIVE: [
        [12, 59, 0, 32, 12, 26],
        [12, 59, 0, 32, 27, 34],
        [12, 59, 0, 32, 111, 136],
        [12, 59, 0, 32, 157, 182],
        [12, 59, 0, 32, 157, 182],
        [12, 59, 0, 32, 183, 193],
        [12, 59, 0, 32, 194, 210],
        [12, 59, 0, 32, 211, 232],
        [30, 53, 67, 97, 35, 46],
        [30, 53, 67, 97, 111, 136],
        [30, 53, 67, 97, 137, 156],
        [30, 53, 67, 97, 211, 232],
        [30, 53, 67, 97, 233, 243],
        [30, 53, 67, 97, 233, 243],
        [53, 77, 55, 101, 244, 255],
        [53, 77, 55, 101, 27, 34],
        [53, 77, 55, 101, 35, 46],
        [53, 77, 55, 101, 61, 100],
        [53, 77, 55, 101, 111, 136],
        [53, 77, 55, 101, 211, 232]
    ],


    ACONTINUER: [
        [60, 84, 9, 60, 8, 11],
        [60, 84, 9, 60, 47, 60],
        [21, 34, 9, 60, 111, 136],
        [56, 66, 4, 33, 157, 182]
    ]
};

// Définition des segments de couleur
const COLOR_SEGMENTS = [
    [0, 7, "Rouge", "S1"],
    [7, 11, "Rouge-Orange", "S2"],
    [11, 26, "Orange", "S3"],
    [26, 34, "Jaune-Orange", "S4"],
    [34, 46, "Jaune", "S5"],
    [46, 60, "Vert-Jaune", "S6"],
    [60, 100, "Vert", "S7"],
    [100, 110, "Bleu-Vert", "S8"],
    [110, 136, "Turquoise", "S9"],
    [136, 156, "Bleu clair", "S10"],
    [156, 182, "Bleu foncé", "S11"],
    [182, 193, "Bleu-Violet", "S12"],
    [193, 210, "Violet", "S13"],
    [210, 232, "Fushia", "S14"],
    [232, 243, "Rouge-Fushia", "S15"],
    [243, 255, "Rouge", "S1"]
];

// Variables globales
let generatedColors = [];
let chartInstances = {};
// Variable pour gérer le nombre de séries
let seriesCount = 3;
// Variable pour gérer le nombre de catégories pour les graphiques circulaires
let categoryCount = 3;

// Fonction pour convertir HSL vers RGB
function hslToRgb(h, s, l) {
    // Normaliser les valeurs
    h = h / 255 * 360; // Excel utilise 0-255 pour H, on convertit en 0-360
    s = s / 100; // Saturation en pourcentage
    l = l / 100; // Luminosité en pourcentage

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) {
        r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
        r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
        r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
        r = x; g = 0; b = c;
    } else {
        r = c; g = 0; b = x;
    }

    return [
        Math.round((r + m) * 255),
        Math.round((g + m) * 255),
        Math.round((b + m) * 255)
    ];
}

// Fonction pour générer une couleur aléatoire dans une plage HSL
function generateRandomColor(lumMin, lumMax, satMin, satMax, hueMin, hueMax) {
    const h = Math.random() * (hueMax - hueMin) + hueMin;
    const s = Math.random() * (satMax - satMin) + satMin;
    const l = Math.random() * (lumMax - lumMin) + lumMin;
    const rgb = hslToRgb(h, s, l);

    // Convertir RGB en hexadécimal
    const hex = '#' + rgb.map(v => {
        const hex = v.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');

    return {
        h: h,
        s: s,
        l: l,
        rgb: rgb,
        hex: hex,
        segment: getColorSegment(h)
    };
}

// Fonction pour déterminer le segment d'une couleur
function getColorSegment(hValue) {
    for (const segment of COLOR_SEGMENTS) {
        if (hValue >= segment[0] && hValue <= segment[1]) {
            return `${segment[2]} (${segment[3]})`;
        }
    }
    return "Non défini";
}

// Fonction pour mélanger un tableau
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Fonction pour parser le code personnalisé
function parseCustomCode(code) {
    // Recherche le pattern "Array(xx, xx, xx, xx, xx, xx)"
    const arrayRegex = /Array\((\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/g;
    const matches = Array.from(code.matchAll(arrayRegex));

    if (matches.length === 0) {
        throw new Error("Aucune définition de palette valide trouvée");
    }

    return matches.map(match => [
        parseInt(match[1]), parseInt(match[2]),
        parseInt(match[3]), parseInt(match[4]),
        parseInt(match[5]), parseInt(match[6])
    ]);
}

// Fonction pour analyser les groupes de couleurs
function analyzeColorGroups(colors) {
    let groups = [];
    const hThreshold = 10; // Seuil de différence pour les teintes
    const slThreshold = 10; // Seuil pour saturation et luminosité

    // Pour chaque couleur
    colors.forEach(color => {
        // Chercher un groupe existant compatible
        let foundGroup = false;

        for (const group of groups) {
            // Vérifier si la couleur s'intègre dans ce groupe
            if (
                Math.abs(color.h - (group.hueMin + group.hueMax) / 2) <= hThreshold &&
                Math.abs(color.s - (group.satMin + group.satMax) / 2) <= slThreshold &&
                Math.abs(color.l - (group.lumMin + group.lumMax) / 2) <= slThreshold
            ) {
                // Ajuster les limites du groupe
                group.hueMin = Math.min(group.hueMin, Math.floor(color.h));
                group.hueMax = Math.max(group.hueMax, Math.ceil(color.h));
                group.satMin = Math.min(group.satMin, Math.floor(color.s));
                group.satMax = Math.max(group.satMax, Math.ceil(color.s));
                group.lumMin = Math.min(group.lumMin, Math.floor(color.l));
                group.lumMax = Math.max(group.lumMax, Math.ceil(color.l));
                group.colors.push(color);

                foundGroup = true;
                break;
            }
        }

        // Si aucun groupe compatible n'a été trouvé, créer un nouveau groupe
        if (!foundGroup) {
            groups.push({
                hueMin: Math.floor(color.h),
                hueMax: Math.ceil(color.h),
                satMin: Math.floor(color.s),
                satMax: Math.ceil(color.s),
                lumMin: Math.floor(color.l),
                lumMax: Math.ceil(color.l),
                colors: [color]
            });
        }
    });

    // Assurer que chaque groupe a des plages minimales
    groups = groups.map(group => {
        // Ajouter une marge minimale à chaque plage
        const minRange = 1;
        if (group.hueMax - group.hueMin < minRange) {
            const mid = (group.hueMax + group.hueMin) / 2;
            group.hueMin = Math.floor(mid - minRange / 2);
            group.hueMax = Math.ceil(mid + minRange / 2);
        }
        if (group.satMax - group.satMin < minRange) {
            const mid = (group.satMax + group.satMin) / 2;
            group.satMin = Math.floor(mid - minRange / 2);
            group.satMax = Math.ceil(mid + minRange / 2);
        }
        if (group.lumMax - group.lumMin < minRange) {
            const mid = (group.lumMax + group.lumMin) / 2;
            group.lumMin = Math.floor(mid - minRange / 2);
            group.lumMax = Math.ceil(mid + minRange / 2);
        }
        return group;
    });

    return groups;
}

// Fonction pour générer les couleurs
function generateColors() {
    const selectedPalette = paletteSelect.value;
    const numberOfColors = parseInt(numberInput.value);
    const randomOrder = randomOrderCheckbox.checked;
    const useCustomCode = customCodeCheckbox.checked;

    let colorPalette;

    if (useCustomCode) {
        try {
            // Parser le code personnalisé
            colorPalette = parseCustomCode(customCodeTextarea.value);
        } catch (e) {
            alert("Erreur dans le code personnalisé: " + e.message);
            return;
        }
    } else {
        colorPalette = PREDEFINED_PALETTES[selectedPalette];
    }

    if (!colorPalette || colorPalette.length === 0) {
        alert("Palette non valide");
        return;
    }

    // Générer les couleurs
    let colors = [];
    for (let i = 0; i < numberOfColors; i++) {
        const familyIndex = i % colorPalette.length;
        const family = colorPalette[familyIndex];

        const [lumMin, lumMax, satMin, satMax, hueMin, hueMax] = family;
        const color = generateRandomColor(lumMin, lumMax, satMin, satMax, hueMin, hueMax);

        colors.push({
            ...color,
            id: i + 1
        });
    }

    // Mélanger les couleurs si randomOrder est activé
    if (randomOrder) {
        colors = shuffleArray(colors);
    }

    generatedColors = colors;

    // Mettre à jour l'interface
    updateColorGrid();
    updateColorTable();

    // Mettre à jour les graphiques
    updateCharts();
}

// Fonction pour mettre à jour la grille de couleurs
function updateColorGrid() {
    colorGrid.innerHTML = '';

    generatedColors.forEach((color, index) => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color.hex;

        const colorIndex = document.createElement('div');
        colorIndex.className = 'color-index';
        colorIndex.textContent = index + 1;

        colorBox.appendChild(colorIndex);
        colorGrid.appendChild(colorBox);
    });
}

// Fonction pour mettre à jour le tableau des couleurs
function updateColorTable() {
    const tbody = colorTable.querySelector('tbody');
    tbody.innerHTML = ''; // Nettoyer le tableau

    // Si generatedColors est vide, sortir
    if (!generatedColors || generatedColors.length === 0) {
        return;
    }

    generatedColors.forEach(color => {
        const tr = document.createElement('tr');

        // Créer les cellules une par une au lieu d'utiliser innerHTML

        // Cellule ID
        const tdId = document.createElement('td');
        tdId.textContent = color.id;
        tr.appendChild(tdId);

        // Cellule couleur
        const tdColor = document.createElement('td');
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-cell';
        colorDiv.style.backgroundColor = color.hex;
        tdColor.appendChild(colorDiv);
        tr.appendChild(tdColor);

        // Cellule HEX
        const tdHex = document.createElement('td');
        tdHex.textContent = color.hex.toUpperCase();
        tr.appendChild(tdHex);

        // Cellule RGB
        const tdRgb = document.createElement('td');
        tdRgb.textContent = `R: ${color.rgb[0]}, G: ${color.rgb[1]}, B: ${color.rgb[2]}`;
        tr.appendChild(tdRgb);

        // Cellule HSL
        const tdHsl = document.createElement('td');
        tdHsl.textContent = `H: ${Math.round(color.h)}, S: ${Math.round(color.s)}%, L: ${Math.round(color.l)}%`;
        tr.appendChild(tdHsl);

        // Cellule Segment
        const tdSegment = document.createElement('td');
        tdSegment.textContent = color.segment;
        tr.appendChild(tdSegment);

        tbody.appendChild(tr);
    });
}



// Fonction pour créer ou mettre à jour les graphiques
function updateCharts() {
    const chartType = chartTypeSelect.value;
    // Afficher/masquer les boutons selon le type de graphique
    const seriesButtons = document.querySelectorAll('#add-series-btn, #remove-series-btn');
    const categoryButtons = document.querySelectorAll('#add-category-btn, #remove-category-btn');

    if (['pie', 'doughnut', 'polarArea'].includes(chartType)) {
        // Pour les graphiques circulaires, afficher les boutons de catégories
        seriesButtons.forEach(btn => btn.style.display = 'none');
        categoryButtons.forEach(btn => btn.style.display = 'inline-block');
    } else {
        // Pour les autres graphiques, afficher les boutons de séries
        seriesButtons.forEach(btn => btn.style.display = 'inline-block');
        categoryButtons.forEach(btn => btn.style.display = 'none');
    }

    // Nettoyer les graphiques existants
    Object.values(chartInstances).forEach(chart => chart.destroy());
    chartInstances = {};

    // Générer les données
    const chartData = generateChartData();

    // Créer les graphiques
    createChart('chart-preview', chartType, chartData);

    // Pour le deuxième graphique, on utilise un type différent
    let secondChartType;
    switch (chartType) {
        case 'bar':
            secondChartType = 'line';
            break;
        case 'line':
            secondChartType = 'bar';
            break;
        case 'pie':
            secondChartType = 'doughnut';
            break;
        case 'radar':
            secondChartType = 'polarArea';
            break;
        case 'polarArea':
            secondChartType = 'radar';
            break;
        default:
            secondChartType = 'bar';
    }

    createChart('chart-preview-2', secondChartType, chartData);

    // Ajouter les graphiques 3 et 4
    const thirdChartType = (chartType === 'pie' || chartType === 'doughnut') ? 'polarArea' : 'pie';
    createChart('chart-preview-3', thirdChartType, chartData);

    const fourthChartType = (chartType === 'radar' || chartType === 'polarArea') ? 'line' : 'radar';
    createChart('chart-preview-4', fourthChartType, chartData);
}

// Fonction modifiée pour générer des données pour les graphiques
// Suppression de l'option 'quarterly' et utilisation du nombre de séries variable
function generateChartData() {
    let labels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    let datasets = [];

    // Créer des datasets avec nos couleurs générées
    // Utiliser le seriesCount au lieu d'un nombre fixe de séries
    for (let i = 0; i < seriesCount; i++) {
        // Générer des données aléatoires pour la démonstration
        const data = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 100));

        // Utiliser les couleurs générées, en boucle si nécessaire
        const colorIndex = i % generatedColors.length;
        const color = generatedColors[colorIndex];

        datasets.push({
            label: `Série ${i + 1}`,
            data: data,
            backgroundColor: color.hex,
            borderColor: color.hex,
            borderWidth: 1
        });
    }

    return {
        labels: labels,
        datasets: datasets
    };
}

// Fonction pour créer un graphique
function createChart(canvasId, type, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    // Configurations spéciales selon le type
    let config = {
        type: type,
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false, // Permet de contrôler la taille
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `Graphique ${type.charAt(0).toUpperCase() + type.slice(1)}`
                }
            }
        }
    };

    // Réduire la taille du premier graphique mais non !!
    if (canvasId === 'chart-preview') {
        ctx.canvas.parentNode.style.height = '300px'; // Hauteur réduite
    }

    // Configurations spéciales pour les graphiques en camembert et polaires

    if (['pie', 'doughnut', 'polarArea'].includes(type)) {
        // Pour ces types, on utilise un seul dataset avec plusieurs couleurs
        const allColors = generatedColors.map(color => color.hex);
        // Utiliser categoryCount au lieu d'une valeur fixe ou min avec allColors.length
        const allData = Array.from({ length: Math.min(categoryCount, allColors.length) },
            () => Math.floor(Math.random() * 100));

        config.data = {
            labels: allData.map((_, i) => `Segment ${i + 1}`),
            datasets: [{
                data: allData,
                backgroundColor: allColors.slice(0, allData.length)
            }]
        };
    }

    // Appliquer uniquement le thème de fond (pas d'autres styles)

    // Créer et stocker l'instance de graphique
    chartInstances[canvasId] = new Chart(ctx, config);
}

// Fonctions pour ajouter et supprimer des séries
function addSeries() {
    seriesCount++;
    updateCharts();
}

function removeSeries() {
    if (seriesCount > 1) {
        seriesCount--;
        updateCharts();
    }
}

// Fonctions pour ajouter et supprimer des catégories
function addCategory() {
    if (categoryCount < generatedColors.length) {
        categoryCount++;
        updateCharts();
    }
}

function removeCategory() {
    if (categoryCount > 1) {
        categoryCount--;
        updateCharts();
    }
}
// Fonction pour exporter au format Excel HTML
function exportToExcelHTML() {
    const selectedPalette = paletteSelect.value;

    // Création d'un document HTML formaté pour Excel
    let htmlContent = `
  <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!--[if gte mso 9]>
    <xml>
    <x:ExcelWorkbook>
    <x:ExcelWorksheets>
    <x:ExcelWorksheet>
    <x:Name>Palette de couleurs</x:Name>
    <x:WorksheetOptions>
    <x:DisplayGridlines/>
    </x:WorksheetOptions>
    </x:ExcelWorksheet>
    </x:ExcelWorksheets>
    </x:ExcelWorkbook>
    </xml>
    <![endif]-->
    <style>
    table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    }
    th {
    background-color: #f2f2f2;
    font-weight: bold;
    }
    .color-cell {
    width: 50px;
    height: 30px;
    }
    </style>
    <title>Palette ${selectedPalette}</title>
  </head>
  <body>
    <h1>Palette de couleurs: ${selectedPalette}</h1>
    <p>Générée le: ${new Date().toLocaleString()}</p>
    <p>Nombre de couleurs: ${generatedColors.length}</p>
    <table>
    <tr>
    <th>ID</th>
    <th>Couleur</th>
    <th>Code Hex</th>
    <th>RGB</th>
    <th>HSL</th>
    <th>Segment</th>
    </tr>
  `;

    // Ajouter chaque couleur au tableau
    generatedColors.forEach(color => {
        htmlContent += `
    <tr>
    <td>${color.id}</td>
    <td class="color-cell" style="background-color: ${color.hex};"></td>
    <td>${color.hex.toUpperCase()}</td>
    <td>R: ${color.rgb[0]}, G: ${color.rgb[1]}, B: ${color.rgb[2]}</td>
    <td>H: ${Math.round(color.h)}, S: ${Math.round(color.s)}%, L: ${Math.round(color.l)}%</td>
    <td>${color.segment}</td>
    </tr>
    `;
    });

    htmlContent += `
  </table>
  
  <h2>Code de génération</h2>
  <pre>${generateCustomCode()}</pre>
  </body>
  </html>
  `;

    downloadFile(htmlContent, `palette_${selectedPalette}_${generatedColors.length}.xlsx`, 'application/vnd.ms-excel');
 
}

// Fonction pour exporter au format CSV
function exportToCSV() {
    const selectedPalette = paletteSelect.value;
    let csvContent = "ID,HEX,R,G,B,H,S,L,Segment\n";

    generatedColors.forEach(color => {
        csvContent += [
            color.id,
            color.hex.toUpperCase(),
            color.rgb[0], color.rgb[1], color.rgb[2],
            Math.round(color.h), Math.round(color.s), Math.round(color.l),
            `"${color.segment}"`
        ].join(',') + '\n';
    });

    downloadFile(csvContent, `palette_${selectedPalette}_${generatedColors.length}.csv`, 'text/csv');
}

// Fonction pour exporter le code VBA
function exportToVBA() {
    const selectedPalette = paletteSelect.value;
    let vbaCode = `' Code VBA pour palette de couleurs: ${selectedPalette}\n`;
    vbaCode += `' Générée le: ${new Date().toLocaleString()}\n`;
    vbaCode += `' Nombre de couleurs: ${generatedColors.length}\n\n`;
    vbaCode += `Sub ApplyPalette()\n`;
    vbaCode += ` Dim colors(${generatedColors.length - 1}, 6) As Variant\n\n`;

    // Définir les couleurs dans un tableau
    generatedColors.forEach((color, index) => {
        vbaCode += ` ' Couleur ${index + 1}: ${color.hex}\n`;
        vbaCode += ` colors(${index}, 0) = ${color.id}\n`;
        vbaCode += ` colors(${index}, 1) = "${color.hex}"\n`;
        vbaCode += ` colors(${index}, 2) = ${color.rgb[0]}\n`;
        vbaCode += ` colors(${index}, 3) = ${color.rgb[1]}\n`;
        vbaCode += ` colors(${index}, 4) = ${color.rgb[2]}\n`;
        vbaCode += ` colors(${index}, 5) = "${Math.round(color.h)}, ${Math.round(color.s)}, ${Math.round(color.l)}"\n`;
        vbaCode += ` colors(${index}, 6) = "${color.segment}"\n\n`;
    });

    vbaCode += ` ' Utilisez la fonction CustomColorSeries de votre add-in ici\n`;
    vbaCode += ` ' Par exemple: Call CustomColorSeries(colors)\n`;
    vbaCode += `End Sub\n\n`;

    vbaCode += generateCustomCode(true);

    downloadFile(vbaCode, `palette_${selectedPalette}_${generatedColors.length}.txt`, 'text/plain');
}

// Fonction pour générer le code personnalisé
function generateCustomCode(isVBA = false) {
    const selectedPalette = paletteSelect.value;
    const numberOfColors = generatedColors.length;

    // Analyser les groupes de couleurs
    const groups = analyzeColorGroups(generatedColors);

    let code = isVBA
        ? `' Code de génération pour la palette ${selectedPalette}\n`
        : `// Code de génération pour la palette ${selectedPalette}\n`;

    code += isVBA
        ? `' Fonction pour recréer cette palette avec ${numberOfColors} couleurs\n`
        : `// Fonction pour recréer cette palette avec ${numberOfColors} couleurs\n`;

    if (isVBA) {
        code += `Function GenerateCustomHSLColors() As Variant\n`;
        code += ` Dim colorPalette(${groups.length - 1}) As Variant\n\n`;

        groups.forEach((group, index) => {
            code += ` ' Groupe ${index + 1} \- ${group.colors.length} couleur(s)\n`;
            code += ` colorPalette(${index}) = Array(${group.lumMin}, ${group.lumMax}, `;
            code += `${group.satMin}, ${group.satMax}, ${group.hueMin}, ${group.hueMax})\n`;
        });

        code += `\n GenerateCustomHSLColors = colorPalette\n`;
        code += `End Function`;
    } else {
        code += `function GenerateCustomHSLColors() {\n`;
        code += ` return [\n`;

        groups.forEach((group, index) => {
            code += ` // Groupe ${index + 1} \- ${group.colors.length} couleur(s)\n`;
            code += ` Array(${group.lumMin}, ${group.lumMax}, `;
            code += `${group.satMin}, ${group.satMax}, ${group.hueMin}, ${group.hueMax})`;

            if (index < groups.length - 1) {
                code += ',';
            }

            code += '\n';
        });

        code += ` ];\n`;
        code += `}`;
    }

    return code;
}

// Fonction pour télécharger un fichier
function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const link = document.createElement('a');
    link.download = filename;
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Éléments du DOM
const paletteSelect = document.getElementById('palette');
const numberInput = document.getElementById('number-colors');
const randomOrderCheckbox = document.getElementById('random-order');
const generateButton = document.getElementById('generate-btn');
const exportButton = document.getElementById('export-btn');
const exportFormatSelect = document.getElementById('export-format');
const colorGrid = document.getElementById('color-grid');
const colorTable = document.getElementById('color-table');
const customCodeCheckbox = document.getElementById('use-custom-code');
const customCodeTextarea = document.getElementById('custom-code');
const chartTypeSelect = document.getElementById('chart-type');
// Supprimer la référence au select de données qui n'existe plus
// const chartDataSelect = document.getElementById('chart-data');

// Événements
generateButton.addEventListener('click', generateColors);

// Ajouter des écouteurs pour les boutons d'ajout/suppression de séries


document.addEventListener('DOMContentLoaded', function () {
    const addSeriesBtn = document.getElementById('add-series-btn');
    const removeSeriesBtn = document.getElementById('remove-series-btn');
    const addCategoryBtn = document.getElementById('add-category-btn');
    const removeCategoryBtn = document.getElementById('remove-category-btn');

    if (addSeriesBtn) addSeriesBtn.addEventListener('click', addSeries);
    if (removeSeriesBtn) removeSeriesBtn.addEventListener('click', removeSeries);
    if (addCategoryBtn) addCategoryBtn.addEventListener('click', addCategory);
    if (removeCategoryBtn) removeCategoryBtn.addEventListener('click', removeCategory);
});

exportButton.addEventListener('click', () => {
    if (generatedColors.length === 0) {
        alert("Veuillez d'abord générer des couleurs");
        return;
    }

    const format = exportFormatSelect.value;

    switch (format) {
        case 'excel-html':
            exportToExcelHTML();
            break;
        case 'csv':
            exportToCSV();
            break;
        case 'vba':
            exportToVBA();
            break;
    }
});

customCodeCheckbox.addEventListener('change', () => {
    customCodeTextarea.disabled = !customCodeCheckbox.checked;
});

// Mise à jour des graphiques lors du changement de configuration
chartTypeSelect.addEventListener('change', updateCharts);
// Supprimer l'écouteur pour le select de données qui n'existe plus
// chartDataSelect.addEventListener('change', updateCharts);

// Génération initiale
document.addEventListener('DOMContentLoaded', function () {
    generateColors();
});


// Fonction pour activer le drag and drop sur les carrés de couleurs
function enableDragAndDrop() {
    const colorGrid = document.getElementById('color-grid');

    if (!colorGrid) return;

    // Référence globale pour stocker les couleurs actuelles
    let currentColors = [...generatedColors];

    // Rendre les éléments glissables
    const colorBoxes = colorGrid.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
        box.setAttribute('draggable', 'true');
        box.addEventListener('dragstart', handleDragStart);
        box.addEventListener('dragover', handleDragOver);
        box.addEventListener('dragenter', handleDragEnter);
        box.addEventListener('dragleave', handleDragLeave);
        box.addEventListener('drop', handleDrop);
        box.addEventListener('dragend', handleDragEnd);
    });

    let draggedItem = null;

    function handleDragStart(e) {
        this.style.opacity = '0.4';
        draggedItem = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        return false;
    }

    function handleDragEnter() {
        this.classList.add('over');
    }

    function handleDragLeave() {
        this.classList.remove('over');
    }

    function handleDrop(e) {
        if (e.stopPropagation) e.stopPropagation();

        if (draggedItem !== this) {
            // Récupérer l'index des deux éléments
            const allBoxes = Array.from(colorGrid.querySelectorAll('.color-box'));
            const fromIndex = allBoxes.indexOf(draggedItem);
            const toIndex = allBoxes.indexOf(this);

            // Échanger les éléments visuellement
            if (fromIndex < toIndex) {
                this.parentNode.insertBefore(draggedItem, this.nextSibling);
            } else {
                this.parentNode.insertBefore(draggedItem, this);
            }

            // Mettre à jour le tableau de couleurs dans l'application
            updateColorSequence(fromIndex, toIndex);
        }

        return false;
    }

    function handleDragEnd() {
        colorBoxes.forEach(box => {
            box.classList.remove('over');
            box.style.opacity = '1';
        });
    }

    // Fonction pour mettre à jour la séquence de couleurs dans l'application
    function updateColorSequence(fromIndex, toIndex) {
        // Faire une copie du tableau des couleurs générées
        const updatedColors = [...generatedColors];

        // Réorganiser le tableau
        const [movedColor] = updatedColors.splice(fromIndex, 1);
        updatedColors.splice(toIndex, 0, movedColor);

        // Mettre à jour la variable générée
        generatedColors = updatedColors;

        // Mettre à jour le tableau de données
        updateColorTable();

        // Mettre à jour les graphiques
        updateCharts();
    }
}

// Ajouter du CSS pour les effets de drag and drop
const dragDropStyle = document.createElement('style');
dragDropStyle.textContent = `
  .color-box.over {
    border: 2px dashed #000;
    transform: scale(1.05);
  }
  .color-box {
    cursor: grab;
    transition: transform 0.2s, opacity 0.2s;
  }
  .color-box:active {
    cursor: grabbing;
  }
`;
document.head.appendChild(dragDropStyle);

// Sauvegarder la fonction originale
const originalUpdateColorGrid = updateColorGrid;

// Remplacer la fonction par notre version modifiée
updateColorGrid = function () {
    // Appeler la fonction originale d'abord
    originalUpdateColorGrid();
    // Puis activer le drag and drop
    enableDragAndDrop();
};

// Si les couleurs sont déjà générées, activer le drag and drop immédiatement
if (document.querySelector('#color-grid')) {
    enableDragAndDrop();
}
