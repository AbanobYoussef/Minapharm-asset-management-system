using DTOs;
using Entities.Hrlpers;
using Microsoft.AspNetCore.Mvc;
using Services.IService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IGenericService<EmployeeDTO> _employeeDTOService;
        public EmployeeController(IGenericService<EmployeeDTO> employeeDTOService)
        {
            _employeeDTOService = employeeDTOService;
        }
        // GET: api/<EmployeeController>
        [HttpGet]
        public ResultModel<EmployeeDTO> Get()
        {
            var x= _employeeDTOService.GetALL();
            return x;
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public ResultModel<EmployeeDTO> Get(int id)
        {
            return _employeeDTOService.GetById(id);
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public Task<ResultModel<EmployeeDTO>> Post([FromBody] EmployeeDTO employee)
        {
            return _employeeDTOService.Insert(employee);
        }

        // PUT api/<EmployeeController>/5

        [Route("edit")]
        [HttpPost]
        public Task<ResultModel<EmployeeDTO>>  Edit([FromBody] EmployeeDTO employee)
        {
            return _employeeDTOService.Update(employee);
        }

        [Route("delete")]
        [HttpPost]
        public Task<ResultModel<EmployeeDTO>> Delete([FromBody] EmployeeDTO employee)
        {
            return _employeeDTOService.Delete(employee.Id);
        }
    }
}
