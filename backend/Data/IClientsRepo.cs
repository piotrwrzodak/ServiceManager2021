using System.Collections.Generic;
using CommandApi.Models;

namespace CommandApi.Data
{
    public interface IClientsRepo
    {
        bool SaveChanges();
        IEnumerable<Client> GetAllKlienci();
        Client GetClientById(int id);
        Client GetClientByPhNumer(string Phone, string Imie, string Nazwisko);
        IEnumerable<Client> GetKlienciByName(string imie);
        IEnumerable<Client> GetKlienciBySur(string nazwisko);
        void CreateClient(Client klient);
        void UpdateClient(Client klientUpdate);
        void DeleteKlienci(Client klient);
    }
}