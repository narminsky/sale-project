$(document).ready(function() {
    // brand kateqoriyalari - sol menyu
    let brands = ["Acer", "Asus", "Casper", "Dell", "Fujitsu", "HP", "Lenovo", "LG", "Nexus", "Samsung"];
    // brand-lerin mehsullari - massivler
    let acer = [
        { photo: "acer.jpg", model: "Acer 1", description: "Acer 1 desc", price: "578", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 2", description: "Acer 2 desc", price: "451", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 3", description: "Acer 3 desc", price: "787", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 4", description: "Acer 4 desc", price: "1345", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 5", description: "Acer 5 desc", price: "1644", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 6", description: "Acer 6 desc", price: "1454", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 7", description: "Acer 7 desc", price: "787", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 8", description: "Acer 8 desc", price: "1254", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 9", description: "Acer 9 desc", price: "1235", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 10", description: "Acer 10 desc", price: "1654", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 11", description: "Acer 11 desc", price: "654", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 12", description: "Acer 12 desc", price: "785", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 13", description: "Acer 13 desc", price: "1520", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 14", description: "Acer 14 desc", price: "654", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 15", description: "Acer 15 desc", price: "789", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 16", description: "Acer 16 desc", price: "3214", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 17", description: "Acer 17 desc", price: "452", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 18", description: "Acer 18 desc", price: "3210", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 19", description: "Acer 19 desc", price: "1204", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 20", description: "Acer 20 desc", price: "5470", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 21", description: "Acer 21 desc", price: "650", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 22", description: "Acer 22 desc", price: "3540", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 23", description: "Acer 23 desc", price: "2450", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 24", description: "Acer 24 desc", price: "2500", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 25", description: "Acer 25 desc", price: "4523", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 26", description: "Acer 26 desc", price: "4523", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 27", description: "Acer 27 desc", price: "4523", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 28", description: "Acer 28 desc", price: "4523", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "acer.jpg", model: "Acer 29", description: "Acer 29 desc", price: "4523", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" }
    ];
    let asus = [
        { photo: "asus.jpg", model: "Asus 1", description: "Asus 1 desc", price: "578", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 2", description: "Asus 2 desc", price: "451", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 3", description: "Asus 3 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 4", description: "Asus 4 desc", price: "1345", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 5", description: "Asus 5 desc", price: "1644", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 6", description: "Asus 6 desc", price: "1454", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 7", description: "Asus 7 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 8", description: "Asus 8 desc", price: "1254", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 9", description: "Asus 9 desc", price: "1235", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 10", description: "Asus 10 desc", price: "1654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 11", description: "Asus 11 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 12", description: "Asus 12 desc", price: "785", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 13", description: "Asus 13 desc", price: "1520", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 14", description: "Asus 14 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 15", description: "Asus 15 desc", price: "789", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 16", description: "Asus 16 desc", price: "3214", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 17", description: "Asus 17 desc", price: "452", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 18", description: "Asus 18 desc", price: "3210", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 19", description: "Asus 19 desc", price: "1204", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 20", description: "Asus 20 desc", price: "5470", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 21", description: "Asus 21 desc", price: "650", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 22", description: "Asus 22 desc", price: "3540", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 23", description: "Asus 23 desc", price: "2450", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 24", description: "Asus 24 desc", price: "2500", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 25", description: "Asus 25 desc", price: "4523", status: "Xeyr", phone: "055-324-3434" }
    ];
    let dell = [
        { photo: "dell.jpg", model: "Dell 1", description: "Dell 1 desc", price: "578", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 2", description: "Dell 2 desc", price: "451", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 3", description: "Dell 3 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 4", description: "Dell 4 desc", price: "1345", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 5", description: "Dell 5 desc", price: "1644", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 6", description: "Dell 6 desc", price: "1454", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 7", description: "Dell 7 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 8", description: "Dell 8 desc", price: "1254", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 9", description: "Dell 9 desc", price: "1235", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 10", description: "Dell 10 desc", price: "1654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 11", description: "Dell 11 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 12", description: "Dell 12 desc", price: "785", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 13", description: "Dell 13 desc", price: "1520", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 14", description: "Dell 14 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 15", description: "Dell 15 desc", price: "789", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 16", description: "Dell 16 desc", price: "3214", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 17", description: "Dell 17 desc", price: "452", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 18", description: "Dell 18 desc", price: "3210", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 19", description: "Dell 19 desc", price: "1204", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 20", description: "Dell 20 desc", price: "5470", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 21", description: "Dell 21 desc", price: "650", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 22", description: "Dell 22 desc", price: "3540", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 23", description: "Dell 23 desc", price: "2450", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 24", description: "Dell 24 desc", price: "2500", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 25", description: "Dell 25 desc", price: "4523", status: "Xeyr", phone: "055-324-3434" }
    ];
    let hp = [
        { photo: "hp.jpg", model: "HP 1", description: "HP 1 desc", price: "578", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 2", description: "HP 2 desc", price: "451", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 3", description: "HP 3 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 4", description: "HP 4 desc", price: "1345", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 5", description: "HP 5 desc", price: "1644", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 6", description: "HP 6 desc", price: "1454", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 7", description: "HP 7 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 8", description: "HP 8 desc", price: "1254", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 9", description: "HP 9 desc", price: "1235", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 10", description: "HP 10 desc", price: "1654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 11", description: "HP 11 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 12", description: "HP 12 desc", price: "785", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 13", description: "HP 13 desc", price: "1520", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 14", description: "HP 14 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 15", description: "HP 15 desc", price: "789", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 16", description: "HP 16 desc", price: "3214", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 17", description: "HP 17 desc", price: "452", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 18", description: "HP 18 desc", price: "3210", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 19", description: "HP 19 desc", price: "1204", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 20", description: "HP 20 desc", price: "5470", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 21", description: "HP 21 desc", price: "650", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 22", description: "HP 22 desc", price: "3540", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 23", description: "HP 23 desc", price: "2450", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 24", description: "HP 24 desc", price: "2500", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 25", description: "HP 25 desc", price: "4523", status: "Xeyr", phone: "055-324-3434" }
    ];
    let lenovo = [
        { photo: "lenovo.jpg", model: "Lenovo 1", description: "Lenovo 1 desc", price: "578", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 2", description: "Lenovo 2 desc", price: "451", status: "Xeyr", phone: "055-324-3434", ram: "4", cpu: "Core i7", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 3", description: "Lenovo 3 desc", price: "787", status: "Xeyr", phone: "055-324-3434", ram: "16", cpu: "Core i5", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 4", description: "Lenovo 4 desc", price: "1345", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i7", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 5", description: "Lenovo 5 desc", price: "1644", status: "Xeyr", phone: "055-324-3434", ram: "4", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 6", description: "Lenovo 6 desc", price: "1454", status: "Xeyr", phone: "055-324-3434", ram: "16", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 7", description: "Lenovo 7 desc", price: "787", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i5", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 8", description: "Lenovo 8 desc", price: "1254", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 9", description: "Lenovo 9 desc", price: "1235", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 10", description: "Lenovo 10 desc", price: "1654", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 11", description: "Lenovo 11 desc", price: "654", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 12", description: "Lenovo 12 desc", price: "785", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 13", description: "Lenovo 13 desc", price: "1520", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 14", description: "Lenovo 14 desc", price: "654", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 15", description: "Lenovo 15 desc", price: "789", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 16", description: "Lenovo 16 desc", price: "3214", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 17", description: "Lenovo 17 desc", price: "452", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 18", description: "Lenovo 18 desc", price: "3210", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 19", description: "Lenovo 19 desc", price: "1204", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 20", description: "Lenovo 20 desc", price: "5470", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 21", description: "Lenovo 21 desc", price: "650", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 22", description: "Lenovo 22 desc", price: "3540", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 23", description: "Lenovo 23 desc", price: "2450", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 24", description: "Lenovo 24 desc", price: "2500", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" },
        { photo: "lenovo.jpg", model: "Lenovo 25", description: "Lenovo 25 desc", price: "4523", status: "Xeyr", phone: "055-324-3434", ram: "8", cpu: "Core i9", memory: "500", memType: "SSD", os: "Windows 10", graphicMem: "3" }
    ];
    // default massiv
    let brandArray = acer;
    // search input
    $("#search").keyup(function(e) {
        let text = $(this).val();
        let notFound = false;
        if ((e.keyCode > 64 && e.keyCode < 91) || e.keyCode == 8) {
            $(".category").empty();
            for (let i = 0; i < brands.length; i++) {
                if (brands[i].toLowerCase().includes(text.toLowerCase())) {
                    liCreate(brands[i]);
                    notFound = true;
                }
            }
            if (notFound == false) {
                liCreate("Axtarış nəticəsi tapılmadı.");
            }
        }
    });
    // li-lerin yaradilmasi ve append
    for (let i = 0; i < brands.length; i++) {
        liCreate(brands[i]);
    }
    // active brand
    $(".category").children().eq(0).addClass("active");
    // default olaraq sehifede acer modelin gosterilmesi
    $(".area").empty();
    // sag bolme - (acer) mehsullar bolmesinin yaradilmasi
    for (let i = 0; i < 15; i++) {
        itemCreator(brandArray[i].photo, brandArray[i].model, brandArray[i].description, brandArray[i].price, brandArray[i].status, brandArray[i].phone, brandArray[i].ram, brandArray[i].cpu, brandArray[i].memory, brandArray[i].memType, brandArray[i].os, brandArray[i].graphicMem);
    }
    // sehifenin scroll-unda kontent yuklenmesi
    let interval;
    $(window).scroll(function() {
        let arrayLength = brandArray.length;
        if (Math.ceil($(window).scrollTop()) + $(window).height() == $(document).height()) {
            let childrenCount = $(".area").children().length;
            let lastItem = 0;
            clearTimeout(interval);
            if (childrenCount < arrayLength) {
                if (arrayLength - childrenCount > 5) {
                    lastItem = childrenCount + 5;
                } else if (arrayLength - childrenCount <= 5) {
                    lastItem = childrenCount + (arrayLength - childrenCount);
                }
                interval = setTimeout(function() {
                    for (let i = childrenCount; i < lastItem; i++) {
                        itemCreator(brandArray[i].photo, brandArray[i].model, brandArray[i].description, brandArray[i].price, brandArray[i].status, brandArray[i].phone);
                    }
                }, 3000);
            } else if (childrenCount >= arrayLength) {
                $(".spinnerio").addClass("d-none");
            }
        }
    });
    // popup
    // exit icon
    $(".icon .bi-x-circle").click(function() {
        $(".popup").removeClass("d-flex");
        $("body").css("overflow", "auto");
    });
    // functions
    function liCreate(text) {
        let catItem = document.createElement("li");
        catItem.classList.add("list-group-item", "cat-item");
        catItem.innerText = text;
        $(".category").append(catItem);
        // sol menyudan brand-e click edildikde hemin brand mehsullarinin sag terefde gosterilmesi
        $(".cat-item").click(function() {
            $(".area").empty();
            $(".cat-item").removeClass("active");
            $(this).addClass("active");
            // sag bolme - mehsullar bolmesinin yaradilmasi
            brandArraySelector($(this).text().toLowerCase());
            // mehsullar yaradan funksiya
            for (let i = 0; i < 15; i++) {
                itemCreator(brandArray[i].photo, brandArray[i].model, brandArray[i].description, brandArray[i].price, brandArray[i].status, brandArray[i].phone, brandArray[i].ram, brandArray[i].cpu, brandArray[i].memory, brandArray[i].memType, brandArray[i].os, brandArray[i].graphicMem);
            }
            $(".spinnerio").removeClass("d-none");
        });
    }

    function itemCreator(photo, model, desc, price, status, phone, ram, cpu, mem, memType, os, vg) {
        // w-20
        let w20 = document.createElement("div");
        w20.classList.add("w-20", "p-2");
        // box
        let box = document.createElement("div");
        box.classList.add("box", "bg-light", "p-2", "rounded");
        // box content
        let img = document.createElement("img");
        img.setAttribute("src", `../img/shopping/${photo}`);
        let pName = document.createElement("p");
        pName.classList.add("p-name");
        pName.innerHTML = `<span>Ad:</span> ${model}`;
        let pDesc = document.createElement("p");
        pDesc.classList.add("p-desc");
        pDesc.innerHTML = `<span>Təsvir:</span> ${desc}`;
        let pPrice = document.createElement("p");
        pPrice.classList.add("p-price");
        pPrice.innerHTML = `<span>Qiymət:</span> ${price} AZN`;
        let pStatus = document.createElement("p");
        pStatus.classList.add("p-status");
        pStatus.innerHTML = `<span>Yeni:</span> ${status}`;
        let pPhone = document.createElement("p");
        pPhone.classList.add("p-phone");
        pPhone.innerHTML = `<span>Telefon:</span> ${phone}`;
        let buttonDiv = document.createElement("div");
        buttonDiv.classList.add("text-center");
        let buttonio = document.createElement("button");
        buttonio.classList.add("btn", "btn-primary");
        buttonio.innerText = "Ətraflı";
        buttonDiv.appendChild(buttonio);
        // append
        box.appendChild(img);
        box.appendChild(pName);
        box.appendChild(pDesc);
        box.appendChild(pPrice);
        box.appendChild(pStatus);
        box.appendChild(buttonDiv);
        w20.appendChild(box);
        $(".area").append(w20);
        // class adding for bootstrap badge style
        $(".area .w-20 span").addClass("bg-info");
        $(".area .w-20 span").addClass("badge");
        // etrafli button-u click
        $(".area .w-20 button").click(function() {
            $(".popup-box .item-img").attr("src", $(this).parents().eq(1).find("img").attr("src"));
            $(".popup-box .name").html($(this).parents().eq(1).find(".p-name").html());
            $(".popup-box .desc").html($(this).parents().eq(1).find(".p-desc").html());
            $(".popup-box .price").html(`${$(this).parents().eq(1).find(".p-price").html()} AZN`);
            $(".popup-box .phone").html($(this).parents().eq(1).find(".p-phone").html());
            $(".popup-box .state").html($(this).parents().eq(1).find(".p-status").html());
            $(".popup-box .ram").html(`<span>RAM:</span> ${ram} GB`);
            $(".popup-box .cpu").html(`<span>CPU:</span> ${cpu}`);
            $(".popup-box .memory").html(`<span>Daimi yaddaş:</span> ${mem} GB`);
            $(".popup-box .mem-type").html(`<span>Daimi yaddaş tipi:</span> ${memType}`);
            $(".popup-box .os").html(`<span>Əməliyyat sistemi:</span> ${os}`);
            $(".popup-box .graphic").html(`<span>Video kart:</span> ${vg} GB`);
            // popup show
            $(".popup").addClass("d-flex");
            // badge
            $(".popup span").addClass("badge");
            $(".popup span").addClass("bg-info");
            // body scroll disabled
            $("body").css("overflow", "hidden");
        })
    }

    function brandArraySelector(catItem) {
        if (catItem == "asus") {
            brandArray = asus;
        } else if (catItem == "acer") {
            brandArray = acer;
        } else if (catItem == "dell") {
            brandArray = dell;
        } else if (catItem == "hp") {
            brandArray = hp;
        } else if (catItem == "lenovo") {
            brandArray = lenovo;
        }
    }
});