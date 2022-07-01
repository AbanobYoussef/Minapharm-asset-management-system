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
            return _employeeDTOService.GetALL();
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public ResultModel<EmployeeDTO> Get(int id)
        {
            return _employeeDTOService.GetById(id);
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public ResultModel<EmployeeDTO> Post([FromBody] EmployeeDTO employee)
        {
            return _employeeDTOService.Insert(employee);
        }

        // PUT api/<EmployeeController>/5
        [HttpPut]
        public ResultModel<EmployeeDTO> Put([FromBody] EmployeeDTO employee)
        {
            return _employeeDTOService.Update(employee);
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public ResultModel<EmployeeDTO> Delete(int id)
        {
            return _employeeDTOService.Delete(id);
        }
    }
}
