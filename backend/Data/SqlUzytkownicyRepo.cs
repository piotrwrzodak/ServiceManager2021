using System;
using System.Collections.Generic;
using System.Linq;
using CommandApi.Models;

namespace CommandApi.Data
{
    public class SqlUzytkownicyRepo : IUzytkownicyRepo
    {
        private readonly SM2021Context _context;

        public SqlUzytkownicyRepo(SM2021Context context)
        {
            _context = context;
        }

        public void CreateUzytkownicy(Uzytkownicy uzytkownik)
        {
            if(uzytkownik==null){
                throw new ArgumentNullException(nameof(uzytkownik));
            }
            _context.Uzytkownicy.Add(uzytkownik);
        }

        public void DeleteUzytkownicy(Uzytkownicy uzytkownik)
        {
           if(uzytkownik==null){
                throw new ArgumentNullException(nameof(uzytkownik));
            }
            _context.Uzytkownicy.Remove(uzytkownik);
        }

        public IEnumerable<Uzytkownicy> GetAllUzytkownicy()
        {
            return _context.Uzytkownicy.OrderByDescending(p=>p.Id).ToList();
        }

        public Uzytkownicy GetUzytkownicyById(short? id)
        {
            return _context.Uzytkownicy.FirstOrDefault(p=>p.Id==id);
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges()>=0);
        }

        public void UpdateUzytkownicy(Uzytkownicy uzytkownicyUpdate)
        {
            //nothing
        }

    }
}