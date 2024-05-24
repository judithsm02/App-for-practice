entity PASSENGERS {
    key Passid         : String(5) not null;
    key DNI            : String(7) not null;
        name           : String(50);
        surname        : String(50);
        AdditionalComm : String(300);
        Genre          : String(50);
}
