using System;
using System.ComponentModel.DataAnnotations;

namespace CommandApi.Dtos
{
    public partial class EmployeeCreateDto
    {
        public int Type { get; set; }
        [Required]
        [StringLength(255)]
        public string Login { get; set; }
        [Required]
        [StringLength(255)]
        public string Password { get; set; }
        [Required]
        [StringLength(50)]
        public string PhoneNumber { get; set; }
        [Required]
        [StringLength(255)]
        public string Name { get; set; }
        [Required]
        [StringLength(255)]
        public string Surname { get; set; }
        [StringLength(255)]
        public string CompanyName { get; set; }
        [StringLength(10)]
        public string Nip { get; set; }
    

    }
}