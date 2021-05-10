
using System;
using CommandApi.Models;

namespace CommandApi.Dtos
{
    public partial class ZleceniaTestReadDto
    {
        public short Rma { get; set; }
        public short IdKlienta { get; set; }

        public DateTime? DataPrzyjecia { get; set; }

        public string Rodzaj { get; set; }

        public string Marka { get; set; }

        public string Model { get; set; }

        public string Usterka { get; set; }

        public decimal KosztNaprawy { get; set; }

        public decimal? KosztCzesci { get; set; }

        public DateTime? DataWydania { get; set; }

        public string Status { get; set; }

        public string Informacje { get; set; }
        public string Imie { get; set; }
        public string Nazwisko { get; set; }
        public int? NrTel { get; set; }
    }
}